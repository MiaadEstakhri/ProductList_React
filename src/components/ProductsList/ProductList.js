import React, { Component } from "react";
import Product from "../Products/Products";

class ProductList extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("productList.js componentDidUpdate");
  }

  renderProduct = () => {
    const { onChange, onDecrement, onIncrement, onDelete, products } =
      this.props;
    if (products.length === 0) return <div>you don`t have anything</div>;

    return products.map((product) => {
      return (
        <Product
          product={product}
          key={product.id}
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
