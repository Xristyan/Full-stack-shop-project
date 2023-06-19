package com.StoreProject.store.service;

import com.StoreProject.store.modal.Address;
import com.StoreProject.store.modal.Student;
import com.StoreProject.store.modal.User;

import java.util.List;

public interface UserService {
    public List<User> getAllUsers();
    public User saveUSer(User user);

    public User updateUser(User user);
    public void updateUserAddress(int id, List<Address> updatedAddress);
}
