package com.StoreProject.store.Exception;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;

import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;

import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.LocalDateTime;
import java.util.stream.Collectors;

@ControllerAdvice
public class CustomizedResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {
    @ExceptionHandler(Exception.class)
    public final ResponseEntity<ErrorDetails> handleAllException(Exception ex, WebRequest request) throws Exception {
        ErrorDetails errorDetails=ErrorDetails.builder()
                .timeStamp(LocalDateTime.now())
                .message(ex.getMessage())
                .details(request.getDescription(false))
                .status(HttpStatus.INTERNAL_SERVER_ERROR.value())
                .build();
        return  new ResponseEntity<>(errorDetails, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    @ExceptionHandler(NotFoundException.class)
    public final ResponseEntity<ErrorDetails> handleUserNotFoundException(Exception ex, WebRequest request) throws Exception {
        ErrorDetails errorDetails = ErrorDetails.builder()
                .timeStamp(LocalDateTime.now())
                .message(ex.getMessage())
                .details(request.getDescription(false))
                .status(HttpStatus.NOT_FOUND.value())
                .build();

        return new ResponseEntity<>(errorDetails, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(BadCredentialsException.class)
    public final ResponseEntity<ErrorDetails> handleBadCredentialsException(Exception ex, WebRequest request) throws Exception {
        ErrorDetails errorDetails = ErrorDetails.builder()
                .timeStamp(LocalDateTime.now())
                .message(ex.getMessage())
                .details(request.getDescription(false))
                .status(HttpStatus.UNAUTHORIZED.value())
                .build();

        return new ResponseEntity<>(errorDetails,HttpStatus.UNAUTHORIZED);
    }



    @ExceptionHandler(UserAlreadyRegisteredException.class)
    public final ResponseEntity<ErrorDetails> handleUserAlreadyRegisteredException(Exception ex,WebRequest request) throws Exception
    {
        ErrorDetails errorDetails = ErrorDetails.builder()
                .timeStamp(LocalDateTime.now())
                .message(ex.getMessage())
                .details(request.getDescription(false))
                .status(HttpStatus.UNAUTHORIZED.value())
                .build();

        return new ResponseEntity<>(errorDetails, HttpStatus.UNAUTHORIZED);
    }

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatusCode status, WebRequest request) {
        ErrorDetails errorDetails= ErrorDetails.builder()
                .timeStamp(LocalDateTime.now())
                .message(ex.getAllErrors().stream().map(error->error.getDefaultMessage()+", ").collect(Collectors.joining()))
                .details(request.getDescription(false))
                .status(HttpStatus.BAD_REQUEST.value())
                .build();

        return new ResponseEntity(errorDetails,HttpStatus.BAD_REQUEST);

    }

}
