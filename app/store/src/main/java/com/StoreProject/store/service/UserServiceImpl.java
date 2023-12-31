package com.StoreProject.store.service;

import com.StoreProject.store.auth.AuthenticationRequest;
import com.StoreProject.store.model.Address;
import com.StoreProject.store.model.Cart;
import com.StoreProject.store.model.User;
import com.StoreProject.store.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User saveUSer(User user) {
        return userRepository.save(user);
    }

    @Override
    public User getUserByEmail(AuthenticationRequest request) {
        Optional<User> optionalProducts = userRepository.findByEmail(request.getEmail());
        User user = optionalProducts.get();
        return user;
    }

    @Override
    public void updateUserAddress(int id, List<Address> updatedAddress) {
        Optional<User> optionalUser = userRepository.findById(id);
        User user = optionalUser.get();

        user.getAddress().clear();

        // Add the updated books
        for (Address address : updatedAddress) {
            user.getAddress().add(address);
        }

        userRepository.save(user);
    }

    @Override
    public User updateUserCart(int id, List<Cart> updatedCart) {
        Optional<User> optionalUser = userRepository.findById(id);
        User user = optionalUser.get();
        user.getCart().clear();

        for (Cart item : updatedCart) {
            user.getCart().add(item);
        }

        userRepository.save(user);
        return user;


    }
}
