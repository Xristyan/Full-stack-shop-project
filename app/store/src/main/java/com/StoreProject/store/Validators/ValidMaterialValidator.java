package com.StoreProject.store.Validators;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class ValidMaterialValidator implements ConstraintValidator<ValidMaterial, String> {

    private static final List<String> VALID_MATERIALS = Arrays.asList("Cotton", "Polyester", "Wool", "Silk", "Linen",
            "Denim", "Rayon", "Nylon", "Spandex", "Velvet", "Corduroy", "Flannel",
            "Fleece", "Cashmere", "Chiffon", "Satin", "Leather", "Suede", "Canvas",
            "Tweed", "Chambray", "Jersey", "Knit", "Twill", "Herringbone", "Seersucker", "Tulle", "Organza",
            "Crepe", "Voile", "Batik", "Brocade", "Taffeta", "Georgette", "Muslin", "Poplin",
            "Gabardine", "Moleskin", "Ponte", "Mesh", "Gingham","Piqué", "Terry Cloth", "Raw Denim",
            "Velour", "Lawn", "Melton", "Ultrasuede", "Neoprene", "Lurex"
    );

    private List<String> UpperCaseCaseValidMaterials;

    @Override
    public void initialize(ValidMaterial constraintAnnotation) {
        UpperCaseCaseValidMaterials = VALID_MATERIALS.stream()
                .map(String::toUpperCase)
                .collect(Collectors.toList());
    }

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        return value != null &&  UpperCaseCaseValidMaterials.contains(value.toUpperCase());
    }
}