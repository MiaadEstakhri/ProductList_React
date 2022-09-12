import React, { useContext, useReducer, useState } from "react";

const ProductContext = React.createContext();
const ProductContextDispatcher = React.createContext();

const initialState = [
  { title: "React.js", price: "89$", id: 1, quantity: 1 },
  { title: "Node.js", price: "79$", id: 2, quantity: 1 },
  { title: "JavaScript", price: "69$", id: 3, quantity: 1 },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      product.quantity++;
      const productUpdated = [...state];
      productUpdated[index] = product;
      return productUpdated;
    }
    case "decrement": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      if (product.quantity === 1) {
        const filteredProducts = state.filter((p) => p.id !== action.id);
        return filteredProducts;
      } else {
        const productUpdated = [...state];
        product.quantity--;
        productUpdated[index] = product;
        return productUpdated;
      }
    }
    case "edit": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      product.title = action.event.target.value;
      const productUpdated = [...state];
      productUpdated[index] = product;
      return productUpdated;
    }
    case "remove":
      const filterRemove = state.filter((p) => p.id !== action.id);
      return filterRemove;

    default:
      return state;
  }
};

const ProductsProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductContext.Provider value={products}>
      <ProductContextDispatcher.Provider value={dispatch}>
        {children}
      </ProductContextDispatcher.Provider>
    </ProductContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => useContext(ProductContext);

export const useProductsActions = () => {
  return useContext(ProductContextDispatcher);
};
