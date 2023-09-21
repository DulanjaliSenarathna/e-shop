import React from 'react'
import './CheckoutProduct.css'

const CheckoutProduct = () => {
  return (
    
         <div className='checkoutProduct'>
            
            <img className='checkoutProduct__image' src='https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg'/>
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>
                Bennett Mystic Men Laptop Bag 15.6 inch Shoulder Briefcase Messenger Business Bags for Men & Women
                </p>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>25</strong>
                </p>
                <div className='checkoutProduct__rating'>
                ⭐⭐⭐⭐
                </div>
                <button>Remove from Basket</button>
            </div>
        </div>
    
  )
}

export default CheckoutProduct