package com.StoreProject.store.Validators;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

import java.util.Arrays;
import java.util.List;

public class ValidBrandValidator implements ConstraintValidator<ValidBrand,String> {

    private static List<String> VALID_BRANDS= Arrays.asList("NIKE","ADIDAS","PUMA");

    @Override
    public boolean isValid(String value, ConstraintValidatorContext constraintValidatorContext) {
        return value!=null && VALID_BRANDS.contains(value.toUpperCase());
    }
}
