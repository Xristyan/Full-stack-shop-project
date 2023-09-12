package com.StoreProject.store.service;

import com.StoreProject.store.auth.AuthenticationRequest;
import com.StoreProject.store.model.Address;
import com.StoreProject.store.model.Cart;
import com.StoreProject.store.model.User;

import java.util.List;

public interface UserService {
    public List<User> getAllUsers();
    public User saveUSer(User user);
    public User getUserByEmail(AuthenticationRequest request);
    public void updateUserAddress(int id, List<Address> updatedAddress);

    public User updateUserCart(int id,List<Cart> updatedCart);


}
