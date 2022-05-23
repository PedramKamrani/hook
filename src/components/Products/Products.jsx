import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import Search from "./Search";
import { useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  const addProductList = (item) => {
    fetch("/product.json", {
      method: "POst",
      body: JSON.stringify(item),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      res.json().then((resData) => {
        setProducts((prevState) => [
          ...prevState,
          {
            id: resData.name,
            ...item,
          },
        ]);
      });
    });
  };
  return (
    <div className="App">
      <ProductForm onAddProduct={addProductList} />
      <section>
        <Search />
        <ProductList onRemoveItem={() => {}} products={products} />
      </section>
    </div>
  );
}

export default Products;
