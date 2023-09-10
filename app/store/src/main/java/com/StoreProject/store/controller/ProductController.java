package com.StoreProject.store.controller;

import com.StoreProject.store.modal.ProductResponse;
import com.StoreProject.store.modal.Products;
import com.StoreProject.store.modal.Reviews;
import com.StoreProject.store.service.FileServiceImpl;
import com.StoreProject.store.service.ProductService;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
@RequestMapping("/products")
@CrossOrigin
public class ProductController {

    @Autowired
    private FileServiceImpl service;

     Logger logger = LoggerFactory.getLogger(getClass());
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

@GetMapping("/getCategory")
public List<Products> getProducts(@RequestParam String gender, @RequestParam String category){
        logger.info(category);
    return productService.getProducts(gender,category);
}
@GetMapping("/getProduct/{id}")
public ProductResponse getProduct(@PathVariable int id,@RequestParam int itemsPerPage)
{
    return productService.getProduct(id,itemsPerPage);
}

@PostMapping("/{id}/addReview")
    public ResponseEntity<Reviews> saveReview(@Valid @RequestBody Reviews review,@PathVariable int id)
{
    return ResponseEntity.ok(productService.saveReview(review,id));
}
@GetMapping("/{id}/reviews")
    public ResponseEntity<List<Reviews>> getReviews(@PathVariable int id,@RequestParam int page ,@RequestParam int itemsPerPage)
{
    return ResponseEntity.ok(productService.getReviews(id,page,itemsPerPage));
}

}
