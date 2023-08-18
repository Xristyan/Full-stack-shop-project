package com.StoreProject.store.Exception.controller;

import com.StoreProject.store.modal.Address;
import com.StoreProject.store.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/address")
@CrossOrigin
public class AddressController {
    @Autowired
    private AddressService addressService;
    @PostMapping("/add")
    public String add(@RequestBody Address address)
    {
        addressService.saveAddress(address);
        return "address saved";
    }
}
