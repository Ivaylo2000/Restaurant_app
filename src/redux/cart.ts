import {
  configureStore,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

type CartItem = {
  id: string;
  title: string;
  img: string;
  ingredients: string[];
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(
      state,
      action: PayloadAction<{
        id: string;
        title: string;
        img: string;
        ingredients: string[];
      }>
    ) {
      console.log(action);
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (state.items[itemIndex].quantity === 1) {
        state.items.splice(itemIndex, 1);
      } else {
        state.items[itemIndex].quantity--;
      }
    },
  },
});

const store = configureStore({
  reducer: cartSlice.reducer,
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
