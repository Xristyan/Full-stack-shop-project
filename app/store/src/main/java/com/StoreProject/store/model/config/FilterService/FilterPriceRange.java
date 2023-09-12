package com.StoreProject.store.model.config.FilterService;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FilterPriceRange {

    private double min;
    private double max;
}
