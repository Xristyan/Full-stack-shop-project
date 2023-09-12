package com.StoreProject.store.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Reviews {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;


    @Size(min = 10 ,message = "Not enough text")
    private String content;

    private int product;
    @NotBlank
    private String userName;

    @Min(value = 0,  message = "Rating must be at least 0")
    @Max(value = 5,  message = "Rating must be at most 5")
    private int rating;

    private LocalDate date;



}
