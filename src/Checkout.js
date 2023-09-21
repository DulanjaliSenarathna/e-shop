import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import './Checkout.css'
import Subtotal from './Subtotal'

const Checkout = () => {
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img className='checkout__ad' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout__ad'/>
        <div className='checkout__title'>
          <h2>Your Shopping Basket</h2>
        </div>
        <CheckoutProduct/>
        <CheckoutProduct/>
        <CheckoutProduct/>
      </div>
      <div className='checkout__right'>
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout