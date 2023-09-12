package com.StoreProject.store.Validators;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class ValidGenderValidator implements ConstraintValidator<ValidGender,String> {
    private static final List<String> GENDERS= Arrays.asList("Men","Women");
    private List<String> upperCaseValidGenders;
    @Override
    public void initialize(ValidGender constraintAnnotation) {
        upperCaseValidGenders = GENDERS.stream()
                .map(String::toUpperCase)
                .collect(Collectors.toList());
    }

    @Override
    public boolean isValid(String value, ConstraintValidatorContext constraintValidatorContext) {
        return value!=null && upperCaseValidGenders.contains(value.toUpperCase());
    }
}
