package com.StoreProject.store.model.config.FilterService;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Filter {

    private List<String> colors;
    private List<String> brands;
    private List<FilterPriceRange> priceRange;

}
