package com.StoreProject.store.service;

import com.StoreProject.store.modal.Address;
import com.StoreProject.store.modal.FileData;
import com.StoreProject.store.modal.Products;
import com.StoreProject.store.modal.User;
import com.StoreProject.store.repository.FileDataRepository;

import com.StoreProject.store.repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class FileServiceImpl {


    @Autowired
    private FileDataRepository fileDataRepository;
    @Autowired
    ProductsRepository productsRepository;

    private final String FOLDER_PATH="C:/Users/Hristian/Desktop/react code/Store Project/01-starting-project/public/images/";

    public String uploadImageToFileSystem(int id,List<MultipartFile> files) throws IOException {
        Optional<Products> optionalProduct= productsRepository.findById(id);
        Products product=optionalProduct.get();





        // Combine the unique identifier, timestamp, and file extension
        for(MultipartFile file : files) {
            String uniqueId = UUID.randomUUID().toString();
            String formattedName=uniqueId + file.getOriginalFilename();
            String filePath = FOLDER_PATH + formattedName;

            FileData fileData = fileDataRepository.save(FileData.builder()
                    .name( formattedName)
                    .type(file.getContentType())
                    .filePath(filePath)
                    .build());


            product.getImages().add(fileData);
            System.out.println(product.getImages());

            file.transferTo(new File(filePath));

        }
        productsRepository.save(product);
        return "added";
    }


}