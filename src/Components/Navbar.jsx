import React, { useContext, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { information } from '../App';
 import {FaSearch} from "react-icons/fa"
 import "./style.css"
const Navbar = () => {
    const data=useContext(information)
    console.log(data)
const[val,setval]=useState("")
let c=(e)=>{
let v=e.target.value
if(v==="groceries"){
    console.log(v)
    const s=a.filter((aa)=>{
        return aa &&  aa.toLowerCase().includes(v)
    })
}
else if(v==='Electronics'){
    console.log(v)
}
else{
    console.log(v)
}

}



  return (
    <div className='nav'>
    <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
      Categories
    </Dropdown.Toggle>

    <Dropdown.Menu>
     
      <Dropdown.Item href="/" > <button onClick={c} value="groceries">Grocerises</button></Dropdown.Item>
      <Dropdown.Item href="/Electronicsproducts"><button onClick={c} value="Electronics">Electronics</button></Dropdown.Item>
      <Dropdown.Item href="/Fashionproducts"><button onClick={c} value="Fashion">Fashion</button></Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
 
  
  
  <div><FaSearch/><input type="text" value={val} onChange={(e)=>{setval(e.target.value);console.log(val)}} /></div>
  </div>
  )
}

export default Navbar