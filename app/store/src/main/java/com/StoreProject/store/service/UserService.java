package com.StoreProject.store.service;

import com.StoreProject.store.auth.AuthenticationRequest;
import com.StoreProject.store.modal.Address;
import com.StoreProject.store.modal.Cart;
import com.StoreProject.store.modal.User;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public interface UserService {
    public List<User> getAllUsers();
    public User saveUSer(User user);
    public User getUserByEmail(AuthenticationRequest request);
    public void updateUserAddress(int id, List<Address> updatedAddress);

    public User updateUserCart(int id,List<Cart> updatedCart);


}
