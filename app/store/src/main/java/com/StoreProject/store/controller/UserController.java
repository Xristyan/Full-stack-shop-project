package com.StoreProject.store.controller;

import com.StoreProject.store.modal.Address;
import com.StoreProject.store.modal.Student;
import com.StoreProject.store.modal.User;
import com.StoreProject.store.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    @PostMapping("/add")
    public String add(@RequestBody User user)
    {
        userService.saveUSer(user);
        return "New user is added";
    }
    @PutMapping("/update/{id}")
    public String update(@PathVariable int id,@RequestBody User user)
    {
        user.setId(id);
        userService.updateUser(user);
        return " Student is updated";
    }
    @PostMapping("/{id}/address")
    public String updateUserAddress(
            @PathVariable int id,
            @RequestBody List<Address> updatedAddress) {

        userService.updateUserAddress(id, updatedAddress);

        return "Author books updated successfully";
    }

}
