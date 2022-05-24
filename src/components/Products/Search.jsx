import Card from "./../../UI/Card/Card"
import React ,{useState,useEffect} from 'react'
const Search = React.memo((props) => {
const {onLoadProducts}=props
  const[searchItem,setSearchItem]=useState('')
useEffect(()=>{

const query=searchItem.length===0 ?'':`?orderBy="title"&equalTo=${searchItem}`

fetch(
    "https://pedram-c9ce9-default-rtdb.firebaseio.com/productHook.json"+query
  ).then((responseData) => {
    const loadingProduct = [];
   
    for (const item in responseData) {
      loadingProduct.push({
        id: item,
        title: responseData[item].title,
        amount: responseData[item].amount,
      });
    }

onLoadProducts(loadingProduct)

},[searchItem])

  return (
    <section className="search">
      <Card >
        <div className="search-input">
          <label> جست وجو </label>
          <input value={searchItem} onChange={(event)=>setSearchItem(event.target.value)} type="text" />
        </div>
      </Card>
    </section>
  )
})
})


export default Search
