package com.StoreProject.store.auth;

import com.StoreProject.store.Exception.BadCredentialsException;
import com.StoreProject.store.Exception.NotFoundException;
import com.StoreProject.store.Exception.UserAlreadyRegisteredException;
import com.StoreProject.store.config.JwtService;

import com.StoreProject.store.modal.Role;
import com.StoreProject.store.modal.User;
import com.StoreProject.store.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request)
{
    if(repository.existsByEmail(request.getEmail()))
    {
        throw new UserAlreadyRegisteredException("User already exists");
    }

    Role role = (request.getRole() == null) ? Role.USER : Role.ADMIN;
    var user = User.builder()
            .email(request.getEmail())
            .password(passwordEncoder.encode(request.getPassword()))
            .role(role)
            .address(request.getAddress())
            .cart(request.getCart())
            .build();
   repository.save(user);
    var jwtToken = jwtService.generateToken(user);
    return AuthenticationResponse.builder()
            .token(jwtToken)
            .build();
}
    public AuthenticationResponse authenticate(AuthenticationRequest request) throws BadCredentialsException {
        var user = repository.findByEmail(request.getEmail())
                .orElseThrow(()->new NotFoundException("User does not exists"));
        try {
             authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()
                    )
            );


        } catch (AuthenticationException e) {
            throw new BadCredentialsException("Bad Credentials");
        }

        var jwtToken = jwtService.generateToken(user);
        return  AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
}
