import { Component } from "react";
import ProductList from "./components/ProductsList/ProductList";
import styles from "./app.module.css";
import NavBar from "./components/NavBar/NavBar";

class App extends Component {
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
    const products = [...this.state.products];
    const selectedItem = products.find((p) => p.id === id);
    selectedItem.quantity++;
    this.setState({ products });
  };

  decrementHandler = (id) => {
    const products = [...this.state.products];
    const selectedItem = products.find((p) => p.id === id);
    if (selectedItem.quantity === 1) {
      const filterProducts = products.filter((p) => p.id !== id);
      this.setState({ products: filterProducts });
    } else {
      selectedItem.quantity--;
      this.setState({ products });
    }
  };

  changeHandler = (event, id) => {
    const products = [...this.state.products];
    const selectedItem = products.find((p) => p.id === id);
    selectedItem.title = event.target.value;
    this.setState({ products });
  };

  render() {
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
