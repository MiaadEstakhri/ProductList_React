import Product from "../Products/Products";
import { useProducts, useProductsActions } from "../Providers/ProductsProvider";

// Functional component

const ProductList = (props) => {
  const products = useProducts();
  const dispatch = useProductsActions();

  const renderProduct = () => {
    if (products.length === 0) return <div>you don`t have anything</div>;

    return products.map((product) => {
      return (
        <Product
          product={product}
          key={product.id}
          onIncrement={() => dispatch({ type: "increment", id: product.id })}
          onDecrement={() => dispatch({ type: "decrement", id: product.id })}
          onDelete={() => dispatch({ type: "remove", id: product.id })}
          onChange={(e) => dispatch({ type: "edit", id: product.id, event: e })}
        />
      );
    });
  };

  return (
    <div>
      {!products.length && <div>not at all</div>}
      {!products.length ? <div>not shopping</div> : null}
      {renderProduct()}
    </div>
  );
};

export default ProductList;
