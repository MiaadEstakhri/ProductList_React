import React, { Component } from "react";
import Product from "../Products/Products";

class ProductList extends Component {
  state = {
    products: [
      { title: "react", price: "89$", id: 1, quantity: 1 },
      { title: "next", price: "79$", id: 2, quantity: 1 },
      { title: "js", price: "69$", id: 3, quantity: 1 },
    ],
  };

  renderProduct = () => {
    const { onChange, onDecrement, onIncrement, onDelete, products } =
      this.props;
    if (products.length === 0) return <div>you don`t have anything</div>;

    return products.map((product) => {
      return (
        <Product
          product={product}
          key={product.id}
          // click={()=>this.clickHandler("hello")}
          onIncrement={() => onIncrement(product.id)}
          onDecrement={() => onDecrement(product.id)}
          onDelete={() => onDelete(product.id)}
          onChange={(e) => onChange(e, product.id)}
        />
      );
    });
  };

  render() {
    const { products } = this.props;
    return (
      <div>
        {!products.length && <div>not at all</div>}
        {!products.length ? <div>not shopping</div> : null}
        {this.renderProduct()}
      </div>
    );
  }
}

export default ProductList;
