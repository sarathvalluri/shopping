import React, { useContext, useEffect, useState } from 'react'
import { information } from '../App'
import { useParams } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from '../components/ExampleCarouselImage';
import "bootstrap/dist/css/bootstrap.css"
import "./style.css"
const Productpage2 = () => {
    const info = useContext(information)
    console.log(info)
    const params = useParams()
    console.log(params)
    const [dd, setdd] = useState('')
    useEffect(()=>{

        info?.items?.map((ele) => {
            
            ele?.products?.map((ele1) => {
                console.log(ele1.id)
                if (params.id == ele1?.id) {

                    setdd(ele1)
                    console.log(dd)
                    

                }
                else {
                    console.log('error')
                }
            })
        })
    },[params])
    return (
        <div className='main'>

<Carousel>
     

           {
            dd?.productImages?.map((imgg)=>{
                return(
                    <Carousel.Item>
                    <img src={imgg} alt="" className='mainimg' />
                    </Carousel.Item>
                )
            })
           }
            
            </Carousel>
            <h3> ProductName : {dd.productName}</h3>
            <h3>price : {dd.price}</h3>
            <h3>oldPrice : {dd.oldPrice}</h3>
            <p><b>description</b> : {dd.description}</p>
            <div className='w'><h3> Size :</h3> {
                dd?.SIZE?.map((ele)=>{
                    return(
                        <h3>{ele}</h3>
                    )
                })
}</div>
<h3>discount : {dd.discount}</h3>
<h3>brand : {dd.brand}</h3>





        </div>

    )
}

export default Productpage2