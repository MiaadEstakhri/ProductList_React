import React, { useContext, useReducer } from "react";
import { productsData } from "../../db/productsData";
import _ from "lodash";

const ProductContext = React.createContext();
const ProductContextDispatcher = React.createContext();

// const initialState = [
//   { title: "React.js", price: "89$", id: 1, quantity: 1 },
//   { title: "Node.js", price: "79$", id: 2, quantity: 1 },
//   { title: "JavaScript", price: "69$", id: 3, quantity: 1 },
// ];

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

    case "filter": {
      const value = action.selectedOptions.value;
      if (value === "") {
        return productsData;
      } else {
        const productUpdated = productsData.filter(
          (p) => p.availableSizes.indexOf(value) >= 0
        );
        return productUpdated;
      }
    }
    case "sort": {
      const value = action.selectedOptions.value;
      const products = [...state];
      if (value === "lowest") {
        return _.orderBy(products, ["price"], ["asc"]);
      } else {
        return _.orderBy(products, ["price"], ["desc"]);
      }
    }

    default:
      return state;
  }
};

const ProductsProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, productsData);

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
