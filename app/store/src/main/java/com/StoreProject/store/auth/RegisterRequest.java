package com.StoreProject.store.auth;

import com.StoreProject.store.modal.Address;
import com.StoreProject.store.modal.Cart;
import com.StoreProject.store.modal.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterRequest {
    private String email;
    private String password;
    private Role role;
    private List<Address> address;
    private List<Cart> cart;
}
