import { Component, useState } from "react";
import ProductList from "./components/ProductsList/ProductList";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Wrapper from "./components/HOC/wrapper";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     console.log("app.js constructor");
//   }

//   state = {
//     products: [
//       { title: "React.js", price: "89$", id: 1, quantity: 1 },
//       { title: "Node.js", price: "79$", id: 2, quantity: 1 },
//       { title: "JavaScript", price: "69$", id: 3, quantity: 1 },
//     ],
//   };

//   removeHandler = (id) => {
//     const filterRemove = products.filter((p) => p.id !== id);
//     setProducts({ products: filterRemove });
//   };

//   incrementHandler = (id) => {
//     const index = products.findIndex((item) => item.id === id);
//     console.log(index);
//     const product = { ...products[index] };
//     product.quantity++;

//     const products = [...products];
//     products[index] = product;
//     setProducts({ products });
//   };

//   decrementHandler = (id) => {
//     const index = products.findIndex((item) => item.id === id);
//     const product = { ...products[index] };
//     if (product.quantity === 1) {
//       const filteredProducts = products.filter((p) => p.id !== id);
//       setProducts({ products: filteredProducts });
//     } else {
//       const products = [...products];
//       product.quantity--;
//       products[index] = product;
//       setProducts({ products });
//     }
//   };

//   changeHandler = (event, id) => {
//     const index = products.findIndex((item) => item.id === id);
//     console.log(index);
//     const product = { ...products[index] };
//     product.title = event.target.value;

//     const products = [...products];
//     products[index] = product;
//     setProducts({ products });
//   };

//   componentDidUpdate(prevProps, prevState) {
//     console.log("App.js componentDidUpdate");
//     console.log("App.js", prevState);
//   }

//   render() {
//     console.log("app.js render");
//     return (
//       <>
//         <h1>App shopping</h1>
//         <NavBar
//           totalItems={products.filter((p) => p.quantity > 0).length}
//         />
//         <ProductList
//           products={products}
//           onDelete={removeHandler}
//           onIncrement={incrementHandler}
//           onDecrement={decrementHandler}
//           onChange={changeHandler}
//         />
//       </>
//     );
//   }
// }

const App = () => {
  const [products, setProducts] = useState([
    { title: "React.js", price: "89$", id: 1, quantity: 1 },
    { title: "Node.js", price: "79$", id: 2, quantity: 1 },
    { title: "JavaScript", price: "69$", id: 3, quantity: 1 },
  ]);

  const removeHandler = (id) => {
    const filterRemove = products.filter((p) => p.id !== id);
    setProducts(filterRemove);
  };

  const incrementHandler = (id) => {
    const index = products.findIndex((item) => item.id === id);
    console.log(index);
    const product = { ...products[index] };
    product.quantity++;

    const productUpdated = [...products];
    productUpdated[index] = product;
    setProducts(productUpdated);
  };

  const decrementHandler = (id) => {
    const index = products.findIndex((item) => item.id === id);
    const product = { ...products[index] };
    if (product.quantity === 1) {
      const filteredProducts = products.filter((p) => p.id !== id);
      setProducts(filteredProducts);
    } else {
      const productUpdated = [...products];
      product.quantity--;
      productUpdated[index] = product;
      setProducts(productUpdated);
    }
  };

  const changeHandler = (event, id) => {
    const index = products.findIndex((item) => item.id === id);
    console.log(index);
    const product = { ...products[index] };
    product.title = event.target.value;

    const productUpdated = [...products];
    productUpdated[index] = product;
    setProducts(productUpdated);
  };

  return (
    <>
      <h1>App shopping</h1>
      <NavBar totalItems={products.filter((p) => p.quantity > 0).length} />
      <ProductList
        products={products}
        onDelete={removeHandler}
        onIncrement={incrementHandler}
        onDecrement={decrementHandler}
        onChange={changeHandler}
      />
    </>
  );
};

export default Wrapper(App, "container");
