import { Component } from "react";
import ProductList from "./components/ProductsList/ProductList";
import styles from "./app.module.css";
import NavBar from "./components/NavBar/NavBar";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("app.js constructor");
  }

  state = {
    products: [
      { title: "React.js", price: "89$", id: 1, quantity: 1 },
      { title: "Node.js", price: "79$", id: 2, quantity: 1 },
      { title: "JavaScript", price: "69$", id: 3, quantity: 1 },
    ],
  };

  removeHandler = (id) => {
    const filterRemove = this.state.products.filter((p) => p.id !== id);
    this.setState({ products: filterRemove });
  };

  incrementHandler = (id) => {
    const index = this.state.products.findIndex((item) => item.id === id);
    console.log(index);
    const product = { ...this.state.products[index] };
    product.quantity++;

    const products = [...this.state.products];
    products[index] = product;
    this.setState({ products });
  };

  decrementHandler = (id) => {
    const index = this.state.products.findIndex((item) => item.id === id);
    const product = { ...this.state.products[index] };
    if (product.quantity === 1) {
      const filteredProducts = this.state.products.filter((p) => p.id !== id);
      this.setState({ products: filteredProducts });
    } else {
      const products = [...this.state.products];
      product.quantity--;
      products[index] = product;
      this.setState({ products });
    }
  };

  changeHandler = (event, id) => {
    const index = this.state.products.findIndex((item) => item.id === id);
    console.log(index);
    const product = { ...this.state.products[index] };
    product.title = event.target.value;

    const products = [...this.state.products];
    products[index] = product;
    this.setState({ products });
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("App.js componentDidUpdate");
    console.log("App.js", prevState);
  }

  render() {
    console.log("app.js render");
    return (
      <div className={styles.app}>
        <h1>App shopping</h1>
        <NavBar
          totalItems={this.state.products.filter((p) => p.quantity > 0).length}
        />
        <ProductList
          products={this.state.products}
          onDelete={this.removeHandler}
          onIncrement={this.incrementHandler}
          onDecrement={this.decrementHandler}
          onChange={this.changeHandler}
        />
      </div>
    );
  }
}

export default App;
