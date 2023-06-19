package com.StoreProject.store.controller;

import com.StoreProject.store.modal.Products;
import com.StoreProject.store.service.FileServiceImpl;
import com.StoreProject.store.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@SpringBootApplication
@RestController
@RequestMapping("/product")
@CrossOrigin
public class ProductController {

    @Autowired
    private FileServiceImpl service;

    @Autowired
    private ProductService productService;
//
    @PostMapping("/{id}/add")
    public ResponseEntity<?> uploadImageToFIleSystem( @PathVariable int id,@RequestParam("image") List<MultipartFile>file) throws IOException {
        String uploadImage = service.uploadImageToFileSystem(id,file);
        return ResponseEntity.status(HttpStatus.OK)
                .body(uploadImage);
    }

    @PostMapping("/addProduct")
    public String add(@RequestBody Products products)
    {
       productService.saveProduct(products);
        return "New user is added";
    }

@GetMapping("/getAll")
public List<Products> getAllProducts(){
    return productService.getAllProducts();
}
@GetMapping("/getProduct/{id}")
public Products getProduct(@PathVariable int id)
{
    return productService.getProduct(id);
}

}
