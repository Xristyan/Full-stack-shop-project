package com.StoreProject.store.auth;

import com.StoreProject.store.Exception.BadCredentialsException;
import lombok.RequiredArgsConstructor;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService authenticationService;
    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest registerRequest)
    {
        return ResponseEntity.ok(authenticationService.register(registerRequest));
    }
    @PostMapping("/authentication")
    public ResponseEntity<AuthenticationResponse> authentication(@RequestBody AuthenticationRequest authenticationRequest) throws BadCredentialsException {
        return ResponseEntity.ok(authenticationService.authenticate(authenticationRequest));
    }
}
