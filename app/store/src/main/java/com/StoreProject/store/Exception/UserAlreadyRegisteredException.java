package com.StoreProject.store.Exception;

public class UserAlreadyRegisteredException extends RuntimeException{
    public UserAlreadyRegisteredException(String message)
    {
        super(message);
    }

}
