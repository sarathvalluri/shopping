import React, { useState } from 'react'
import { useCart } from 'react-use-cart'
import "./style.css"
const Cart = () => {
  const[da,setda]=useState(false)
  const[tr,setTr]=useState(false)
  let click1=()=>{
    setda(true)
  }
  let click2 =()=>{
    setTr(true)
  }
  const{
    isEmpty,totalUniqueItems,items,totalItems,cartTotal,updateItemQuantity,removeItem,emptyCart}=useCart()
  if(isEmpty) return <h1>Cart is empty</h1>
  return (
   <>
   <table className={da ? "no" :"change"}>
   {items.map((ele)=>{
    return(
   <tr  >
       <td> <img src={ele?.catImg} alt="" className='mainimg' /></td>
        <td><h1>{ele?.productName}</h1></td>
        <td><h2>{ele?.price}</h2></td>
        <td>Quantity ({ele?.quantity})</td>
        <td><button onClick={()=>{updateItemQuantity(ele?.id,ele?.quantity +1)}}>+</button><button onClick={()=>{updateItemQuantity(ele?.id,ele?.quantity -1)}}>-</button><button onClick={()=>{removeItem(ele?.id)}}>Remove</button></td>
        </tr> 
    )  
    })
}</table>
<button onClick={click1} className={da ? "no" :"change"}>Done</button>
<div className={da ? "site" :"no"}>
  <div className={tr ? 'no' :'site'}>
  <h1>Total Items : {totalItems}</h1>
 <h1> Total amount : {cartTotal}</h1> 
 </div>
 <div className={tr ? "site" :"no"}>
  <h1>Your Order Is Successfully place </h1>
 </div>
  <button onClick={click2} className={tr && 'no' } >place the order</button></div>

  </>
  )
}

export default Cart