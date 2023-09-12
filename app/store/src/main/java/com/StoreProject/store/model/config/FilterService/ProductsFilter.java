package com.StoreProject.store.model.config.FilterService;

import com.StoreProject.store.model.Products;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductsFilter {

    public List<Products> productsFilter(List<Products> products,int page,int itemsPerPage,Filter filter)
    {
        int startIndex=(page-1)*itemsPerPage;
        int endIndex=page*itemsPerPage;


         List<Products> filteredProducts =products.stream()
                .filter(product -> {
                    boolean colors = filter.getColors().size()!=0 ? filter.getColors().stream()
                            .map(color -> color.toUpperCase())
                            .collect(Collectors.toList())
                            .contains(product.getColor().toUpperCase()):true;


                    boolean brands= filter.getBrands().size()!=0?filter.getBrands().stream().map(brand->brand.toUpperCase())
                            .collect(Collectors.toList()).contains(product.getBrand().toUpperCase()):true;


                    double discountedPrice = calculateDiscount(product.getDiscount(), product.getPrice());


                    boolean price=filter.getPriceRange().size()!=0?filter.getPriceRange().stream()
                            .anyMatch(range->range.getMin()<discountedPrice && discountedPrice<range.getMax()):true;


                    return colors && brands && price;
                })
                .collect(Collectors.toList());
        if(endIndex>=filteredProducts.size())
        {
            endIndex=filteredProducts.size();
        }

         return filteredProducts.subList(startIndex,endIndex);

    }
    public double calculateDiscount(int discount,double price)
    {

        return (price - (price * ((double) discount / 100)));
    }

}
