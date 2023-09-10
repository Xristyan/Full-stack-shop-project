import { createSlice } from "@reduxjs/toolkit";
const filterSlice = createSlice({
  name: "filters",
  initialState: {
    colorsFilter: [],
    priceFilter: [],
    brandFilter: [],
    showColorsFilter: false,
    showPricesFilter: false,
    showBrandsFilter: false,
  },
  reducers: {
    colorsFilterHandler(state, actions) {
      const color = actions.payload;

      if (state.colorsFilter.includes(color)) {
        state.colorsFilter = state.colorsFilter.filter((item) => {
          return item !== color;
        });
      } else {
        state.colorsFilter.push(color);
      }
    },
    priceFilterHandler(state, actions) {
      const range = actions.payload;
      if (
        state.priceFilter.find((price) => {
          return price.min === range.min && price.max === range.max;
        })
      ) {
        state.priceFilter = state.priceFilter.filter((item) => {
          return item.min !== range.min && item.max !== range.max;
        });
      } else {
        state.priceFilter.push(range);
      }
    },
    brandFilterHandler(state, actions) {
      const brand = actions.payload;

      if (state.brandFilter.includes(brand)) {
        state.brandFilter = state.brandFilter.filter((item) => {
          return item !== brand;
        });
      } else {
        state.brandFilter.push(brand);
      }
    },
    showColorsFilterHandler(state) {
      state.showColorsFilter = !state.showColorsFilter;
    },
    showPricesFilterHandler(state) {
      state.showPricesFilter = !state.showPricesFilter;
    },
    showBrandsFilterHandler(state) {
      state.showBrandsFilter = !state.showBrandsFilter;
    },
    reset(state) {
      state.colorsFilter = [];
      state.showColorsFilter = false;
      state.priceFilter = [];
      state.showPricesFilter = false;
      state.brandFilter = [];
      state.showBrandsFilter = false;
    },
  },
});
export const filtersActions = filterSlice.actions;
export default filterSlice.reducer;
