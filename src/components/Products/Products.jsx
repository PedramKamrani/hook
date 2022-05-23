import ProductForm from "./ProductForm";
import ProductList from './ProductList'
import Search from "./Search";
import { useState } from 'react';


function Products() {
const [products,setProducts]=useState([])


const addProductList=(item)=>{
  setProducts((prevState)=>[
    ...prevState,{
id:Math.random().toString(),
...item
    }
  ])
}
  return (
    <div className="App">
      <ProductForm onAddProduct={addProductList} />
      <section>
        <Search />
        <ProductList onRemoveItem={()=>{}} products={products}/>
      </section>
    </div>
  );
}

export default Products;
