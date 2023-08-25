package com.StoreProject.store.controller;

import com.StoreProject.store.modal.Products;
import com.StoreProject.store.service.FileServiceImpl;
import com.StoreProject.store.service.ProductService;
import jakarta.validation.Valid;
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
    @CrossOrigin
    @PostMapping("/add")
    public ResponseEntity<?> uploadImageToFIleSystem(@RequestParam("product") String product,@RequestParam("image") List<MultipartFile>file) throws IOException {
        String uploadImage = service.uploadImageToFileSystem(product,file);
        return ResponseEntity.status(HttpStatus.OK)
                .body(uploadImage);
    }

    @PostMapping("/addProduct")
    public String add(@Valid @RequestBody Products products)
    {
       productService.saveProduct(products);
        return "New product is added";
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
