import React from 'react'
import './Product.css'

const Product = () => {
  return (
            <div className='product'>
            <div className='product__info'>
                <p>Title</p>
                <p className='product__price'>
                  <small>$</small>
                  <strong>30</strong>
                </p>
                <div className='product__rating'>⭐⭐</div>
            </div>
            <img src='https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL.SL1000_.jpg' 
            alt='product image'/>
            <button>Add to basket</button>
        </div>
 
  )
}

export default Product