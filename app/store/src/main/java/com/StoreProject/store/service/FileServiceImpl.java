package com.StoreProject.store.service;

import com.StoreProject.store.model.FileData;
import com.StoreProject.store.model.Products;

import com.StoreProject.store.repository.ProductsRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class FileServiceImpl {


    @Autowired
    ProductsRepository productsRepository;

    private final String FOLDER_PATH="C:/Users/Hristian/Desktop/Full-stack-shop-project/client/public/images/";

    public String uploadImageToFileSystem(String productDtoJson,List<MultipartFile> files) throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        Products product=objectMapper.readValue(productDtoJson, Products.class);
        product.setDiscount(0);

        List<FileData> fileDataList = new ArrayList<>();
        // Combine the unique identifier, timestamp, and file extension
        for(MultipartFile file : files) {
            String uniqueId = UUID.randomUUID().toString();
            String formattedName=uniqueId + file.getOriginalFilename();
            String filePath = FOLDER_PATH + formattedName;


            FileData fileData = FileData.builder()
                    .name( formattedName)
                    .type(file.getContentType())
                    .filePath(filePath)
                    .build();


            fileDataList.add(fileData);

            file.transferTo(new File(filePath));

        }
        product.setImages(fileDataList);
        productsRepository.save(product);
        return "added";
    }
}