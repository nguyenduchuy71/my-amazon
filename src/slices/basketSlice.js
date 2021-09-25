import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("basket")) || [],
  searchItems: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
      localStorage.setItem("basket", JSON.stringify(state.items));
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );
      let newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as its not in basket`
        );
      }
      state.items = newBasket;
      localStorage.setItem("basket", JSON.stringify(state.items));
    },
    searchItemsFromText: (state, action) => {},
  },
});

export const { addToBasket, removeFromBasket, searchItemsFromText } =
  basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectSearchItems = (state) => state.basket.searchItems;
export const selectTotal = (state) =>
  state.basket.items.reduce((total, item) => total + item.price * item.qty, 0);
export default basketSlice.reducer;
