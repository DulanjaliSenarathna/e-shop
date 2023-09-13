import React from 'react';
import './Home.css'
import Product from './Product';

const Home = () => {
  return (
    <div>
        <div className="home">
            <div className="home__container">
                <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="" className='home__image' />
                <div className="home__row">
                  <Product id='1234585' title='Bennett Mystic Men Laptop Bag 15.6 inch Shoulder Briefcase Messenger 
                  Business Bags for Men & Women' price={11.96} rating={5} image='https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg'/>
                  <Product id='45789657' title='IFB 30 L Convection Microwave Oven (30SC4, Metallic Silver, with Starter Kit)' price={43.46} rating={4} image='https://m.media-amazon.com/images/I/61aGG7ePLSL._SL1137_.jpg'/>
                </div>
                <div className="home__row">
                <Product id='7541286' title='All the Light We Cannot See: The Breathtaking World Wide Bestseller Paperback' image='https://m.media-amazon.com/images/I/81ai1wWKL1L._SL1500_.jpg' price={11.21} rating={4} />
                <Product id='7541287' title='Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric' image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$' price={98.99} rating={5}/>
                <Product id='7541288' title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)' image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg' price={589.66} rating={5}/>
                </div>
                <div className="home__row">
                <Product id='7541289' title='Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440' image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg' price={78.65} rating={4}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home