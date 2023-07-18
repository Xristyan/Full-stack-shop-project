package com.StoreProject.store.controller;

import com.StoreProject.store.auth.AuthenticationRequest;
import com.StoreProject.store.modal.Address;
import com.StoreProject.store.modal.Cart;
import com.StoreProject.store.modal.User;
import com.StoreProject.store.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;
    @GetMapping("/getAll")
    public List<User> getAllStudents(){
        return userService.getAllUsers();
    }
    @PostMapping("/getUserBy/email")
    public User getUserByEmail(@RequestBody AuthenticationRequest request)
    {
        return userService.getUserByEmail(request);
    }


    @PutMapping ("/{id}/address")
    public String updateUserAddress(
            @PathVariable int id,
            @RequestBody List<Address> updatedAddress) {

        userService.updateUserAddress(id, updatedAddress);

        return "updated";
    }
    @PutMapping("/{id}/cart")
    public ResponseEntity<User> updateUserCart(@PathVariable int id, @RequestBody List<Cart> updatedCart)
    {
        return ResponseEntity.ok(userService.updateUserCart(id,updatedCart));
    }

}
