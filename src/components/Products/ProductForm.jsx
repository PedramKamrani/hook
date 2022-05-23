import React, { useState } from "react";
import Card from './../../UI/Card/Card'

const ProductForm=React.memo((props)=>{
 const [inputTitle,setTitle]=useState('')
 const [inputamount,setamount]=useState('')
    const submitHandler=(event)=>{
        event.preventDefault()

       props.onAddProduct({title:inputTitle,amount:inputamount})
    }
    
    return (
        <section className="product-form">
          <Card>
            <form onSubmit={submitHandler}>
              <div className="form-control">
                <label htmlFor="title">عنوان</label>
                <input  value={inputTitle} onChange={(event)=>setTitle(event.target.value)}
              
                 type="text" id="title" />
              </div>
              <div className="form-control">
                <label htmlFor="amount">تعداد</label>
                <input value={inputamount}  onChange={
                  (event)=>{
                    setamount(event.target.value)
                  }
                } type="number" id="amount" />
              </div>
              <div className="product-form_actions">
                <button type="submit">آفزودن</button>
              </div>
            </form>
          </Card>
        </section>
      );

})

export default ProductForm;
