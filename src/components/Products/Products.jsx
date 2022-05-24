import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import Search from "./Search";
import { useState,useEffect } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    fetch("https://pedram-c9ce9-default-rtdb.firebaseio.com/productHook.json")
    .then((responseData)=>{
      const loadingProduct=[]
console.log(responseData);
      for(const item in responseData){
        loadingProduct.push({
          id:item,
          title:responseData[item].title,
          amount:responseData[item].amount
        })
      }

      setProducts(loadingProduct)
    })
  },[])

  const addProductList = (item) => {
    fetch("https://pedram-c9ce9-default-rtdb.firebaseio.com/productHook.json", {
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
