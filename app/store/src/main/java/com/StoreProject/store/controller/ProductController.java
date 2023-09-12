package com.StoreProject.store.controller;

import com.StoreProject.store.model.Products;
import com.StoreProject.store.model.Reviews;
import com.StoreProject.store.model.ReviewsResponse;
import com.StoreProject.store.model.config.FilterService.Filter;
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

    @PostMapping("/add")
    public ResponseEntity<?> uploadImageToFIleSystem(@Valid @RequestParam("product") String product,@RequestParam("image") List<MultipartFile>file) throws IOException {
    logger.info(product);
        String uploadImage = service.uploadImageToFileSystem(product,file);
    return ResponseEntity.status(HttpStatus.OK)
            .body(uploadImage);
    }

@PostMapping("/getCategory")
public List<Products> getProducts(@RequestBody Filter filter, @RequestParam String peopleType, @RequestParam String category, @RequestParam int page, @RequestParam int itemsPerPage){

    return productService.getProducts(peopleType,category,page,itemsPerPage,filter);
}
@GetMapping("/getProduct/{id}")
public Products getProduct(@PathVariable int id,@RequestParam int itemsPerPage)
{
    return productService.getProduct(id,itemsPerPage);
}

@PostMapping("/{id}/addReview")
    public ResponseEntity<ReviewsResponse> saveReview(@Valid @RequestBody Reviews review,@PathVariable int id,@RequestParam int page , @RequestParam int itemsPerPage)
{
    return ResponseEntity.ok(productService.saveReview(review,id,page,itemsPerPage));
}
@GetMapping("/{id}/reviews")
    public ResponseEntity<ReviewsResponse> getReviews(@PathVariable int id, @RequestParam int page , @RequestParam int itemsPerPage)
{
    return ResponseEntity.ok(productService.getReviews(id,page,itemsPerPage));
}

}
