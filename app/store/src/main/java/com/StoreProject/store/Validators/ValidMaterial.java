package com.StoreProject.store.Validators;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target({ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = ValidMaterialValidator.class)
public @interface ValidMaterial {
    String message() default "Invalid material";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}