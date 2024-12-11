import React, { useState,useEffect } from 'react'
import axios from "axios"
import StripeCheckout from 'react-stripe-checkout';
import {Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const key ="pk_test_51PpD2CP3vTSBnCet0XdIS9J3UmuQwrsi1dXVt0R3Z3Ttz5KNrU6hwP11IXryvxAEQ0PZgKjB5GfKDVFeA0BCfmDN00aAwQIVON"

const Payment = ({ bookingDetails }) => {



  const [stripetoken,setstripetoken]=useState(null)
  const [load , setload]=useState(null)

  
  // Calculate the total price
  const price = 4000 ;

  const navigate = useNavigate()

    const handletoken=(token)=>{
      setstripetoken(token)
        console.log(token)
    };

    useEffect(()=>{
      
      if (stripetoken && stripetoken.id) {

      axios.post("http://localhost:3010/client/payment",{tokenId:stripetoken.id,
        amount:price
      }).then((res)=>{
        if(res.data.stripeErr){
            console.log(res.data.stripeErr)
        }
        else{
          console.log("success")
          navigate("/")

        }
      })
    }
    },[stripetoken])
  
  return (
    <div>
      <div>
        {
          load && <p>give card number as 4242 4242 4242 4242</p>
        }
      </div>
      {
        stripetoken ? <span>Processing please wait....</span> :
      
        <StripeCheckout
        name='DCruise website'
        image='/images/payment.jpeg'
        billingAddress
        shippingAddress
        description={`Your total is ${price}`}
        amount={price}
        token={handletoken}
        stripeKey={key} 
        >
         <Button 
         className='ms-5' 
         variant='warning border-dark border-2'
         style={{fontFamily: "Alegreya SC, serif"}}
         onClick={()=>{setload(true)}}
        >
          Book 
        </Button> 
        </StripeCheckout>
      }
     
    </div>
  )
}

export default Payment