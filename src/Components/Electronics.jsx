import React, { useContext } from 'react'
import { information } from '../App'
import { Link } from 'react-router-dom'
import "./style.css"
const Electronics = () => {
  const info=useContext(information)
  console.log(info)
  return (
    <div className='main'>
      <h1>{info.cat_name}</h1>
      <img src={info.image}/>
      <div className='maincard' >
        {
          info?.items?.map((ele)=>{
            return(
              <div  className='maincards'>
              <h1>{ele?.cat_name}</h1>
              <div className='cards'>
              {
                
                ele?.products?.map((element)=>{

                  return(
                    <Link to={`/Electronicsproducts/${element.id}`} className='link'>
                    <div className='subcards'>
                      <img src={element?.catImg} className='mainimg'/>
                      <h5><span>Productname</span>  :{element?.productName}</h5>
                      <h5> Price :{element?.price}</h5>
                      <button>But now</button>

                    </div>
                    </Link>
                    
                  )
                })
              }
              </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Electronics