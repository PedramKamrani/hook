import React from "react";
import './ErrorModel.css';
const ErrorModel = React.memo((props)=>{

    return ( 
<>
<div  className="backedrop"  onClick={props.onClose}></div>
<div className="error-modal">
<h2>پیام خطا</h2>
<p>{props.children}</p>
<div className=" error-model_actions">
    <button type="button"  onClick={props.onClose}>باشه</button>
</div>
</div>

</>
        );
})
   

 
export default ErrorModel;