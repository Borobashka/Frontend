import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  totalCount: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      //поиск объекта в массиве. Если такой объект найден, то увеличиваем его на 1 и сделать перерисовку
      //если объект не нашелся, то в этом случае, добавить новый объект в массив
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      //узнаем сколько всего пицц и суммируем их
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum; // (сколько стоит пицци * сколько раз ее добавили) + добавить предыдущую сумму
      }, 0);
    },
    // plusItem(state, action) {
    //   const findItem = state.items.find((obj) => obj.id === action.payload);
    //   if (findItem) {
    //     findItem.count++;
    //   }
    // },
    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count--;
      }
  
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItems(state, action) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
