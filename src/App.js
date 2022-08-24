import { Component } from "react";
import HookCounter from "./components/HookCounter";
import ClassHook from "./components/ClassHook";
import ObjectHook from "./components/ObjectHook";
import ArrayHook from "./components/ArrayHook";
import ProductList from "./components/ProductsList/ProductList";
import styles from "./app.module.css";
import react from "react";
import NavBar from "./components/NavBar/NavBar";

class App extends Component {
  state = {
    products: [
      { title: "react", price: "89$", id: 1, quantity: 1 },
      { title: "next", price: "79$", id: 2, quantity: 1 },
      { title: "js", price: "69$", id: 3, quantity: 1 },
    ],
    count: 0,
  };
  clickHandler = (n) => {
    // this.setState({
    //   products: [
    //     { title: "react", price: "59$", id: 1 },
    //     { title: "next", price: "49$", id: 2 },
    //     { title: n, price: "39$", id: 3 },
    //   ],
    // });
  };

  countHandler = (id) => {
    console.log("c", id);
    this.setState({ count: this.state.count + 1 });
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
        <button onClick={() => this.countHandler(2)}>
          count : {this.state.count}
        </button>
      </div>
    );
  }
}

export default App;

// const App = () => {
//   return (
//     <div className="container">
//       {/* <HookCounter /> */}
//       {/* <ClassHook /> */}
//       {/* <ObjectHook /> */}
//       <ArrayHook />
//     </div>
//   );
// };
