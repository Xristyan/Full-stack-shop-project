package com.StoreProject.store.Exception;

import javax.naming.AuthenticationException;

public class BadCredentialsException extends AuthenticationException {
    public BadCredentialsException(String msg)
    {
        super(msg);
    }

}
