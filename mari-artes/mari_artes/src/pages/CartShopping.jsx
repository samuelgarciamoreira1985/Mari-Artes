//REACT
import Footer from '../components/Footer/Footer.jsx' 
import { useState,useContext } from 'react'
//CONTEXT
import { CartShoppingContext } from "../context/CartContext.jsx"
//CSS
import "./CartShopping.css"

const CartShopping = () => {

    const { cartItems,setCartItems } = useContext(CartShoppingContext)

  return (

    <div className='container-cart-shopping'>

        <h3 className='title-cart-shopping'>Carrinho de Compras</h3>

        <div className='container-shopping-items-summary'>
            <div className='container-items-cart'>
            
            </div>

            <div className='container-summary-cart'>
            
            </div>
        </div>

        <div>
          <Footer/>
        </div>
    </div>

  )
}

export default CartShopping