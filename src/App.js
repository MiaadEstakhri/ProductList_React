import ProductList from "./components/ProductsList/ProductList";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Wrapper from "./components/HOC/wrapper";
import ProductsProvider from "./components/Providers/ProductsProvider";
import Filter from "./components/Filter/Filter";

// Functional component

const App = () => {
  return (
    <>
      <ProductsProvider>
        <h1>App shopping</h1>
        <NavBar />
        <Filter />
        <ProductList />
      </ProductsProvider>
    </>
  );
};

export default Wrapper(App, "container");
