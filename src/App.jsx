import { createContext, useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
import {BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from './Components/Home'
import Grocerise from './Components/Grocerise'
import Electronics from './Components/Electronics'
import Fashion from './Components/Fashion'
import Errorpage from './Components/Errorpage'
import Productpage from './Components/Productpage'
import Productpage1 from './Components/Productpage1'
import Navbar from './Components/Navbar'
import Productpage2 from './Components/Productpage2'
import Cart from './Components/Cart'
import { CartProvider } from 'react-use-cart'
export const information=createContext()
function App() {
  const[gro,setGro]=useState('')
  const[ele,setEle]=useState('')
  const[fas,setFas]=useState('')
  const[pro,setpro]=useState('')
 const retrive= async ()=>{
  const data=await axios.get("../product.json")
  const{productData}=data.data
  const[obj1,obj2,obj3]= productData
  setpro(productData)
  setGro(obj1)
  setEle(obj2)
  setFas(obj3)
  
  
 }
 useEffect(()=>{
retrive()
 },[])

  return (
    <>
   <information.Provider value={pro}><Navbar/></information.Provider> 
    <Router>
      <Routes>
        <Route path="/" element={<information.Provider value={gro}><Grocerise/></information.Provider>}/>
               <Route path="/Fashionproducts" element={<information.Provider value={fas}><Fashion/></information.Provider>}/>
<Route path="/Electronicsproducts" element={<information.Provider value={ele}><Electronics/></information.Provider>}/>
        <Route path='/Gerocerisesproducts/:id' element={<information.Provider value={gro}><CartProvider><Productpage/></CartProvider></information.Provider>}/>
        <Route path="/Electronicsproducts/:id" element={<information.Provider value={ele}><Productpage1/></information.Provider>}/>
       <Route path='/Fashionproducts/:id' element={<information.Provider value={fas}><Productpage2/></information.Provider>}/>
        <Route path='/cart' element={<CartProvider><Cart/></CartProvider>}/>
        
         <Route path='*' element={<Errorpage/>}/>

      </Routes>
    </Router>
     
    </>
  )
}

export default App
