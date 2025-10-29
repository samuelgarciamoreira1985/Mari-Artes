//REACT
import Footer from '../components/Footer/Footer.jsx' 
import { useState,useContext } from 'react'
//CONTEXT
import { CartShoppingContext } from "../context/CartContext.jsx"
//CSS
import "./CartShopping.css"
//ÍCONES
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";

const CartShopping = () => {

    const { cartItems,setCartItems } = useContext(CartShoppingContext)

  return (

    <div className='container-cart-shopping'>

        <h3 className='title-cart-shopping'>Carrinho de Compras</h3>

        <div className='container-shopping-items-summary'>
            
            <ul>
              <div className='container-items-cart'>
                 {cartItems.map && cartItems?.map(item => (
                   <div className='li-items'>
                     <li key={item.idItem}>
                       <img src={item.photoItem} alt="imagem do ítem do carrinho" />
                       <div className='info-values-items-cart'>
                        <p>{item.descriptionItem}</p>
                        <p>x <span style={{fontSize:"1.2rem"}}>{item.amountItem}</span></p>
                        <div className='value-btn-cart'>
                          <p style={{color:"red",fontWeight:"600",fontSize:"1.3rem"}}>R$ {item.valueItem}</p>
                          <button className='btn-remove-item-cart'><MdDelete className='icon-remove'/></button>
                        </div>
                       </div>
                     </li>
                   </div>
                 ))}
              </div>
            </ul>

            <div className='container-summary-cart'>
                 <div className='sub-container-summary-cart'>
                   <h4>Resumo</h4>
                   <div className='values-summary'>
                     <div className='summary-subtotal'>
                       <p>Subtotal</p>
                       <p>R$ 100.163.00</p>
                     </div>
                     <div className='summary-amount'>
                       <p>Quantidade</p>
                       <p>24</p>
                     </div>
                     <div className='summary-date'>
                       <p>Data do pedido</p>
                       <p>29/10/25</p>
                     </div>
                     <div className='summary-value'>
                       <p style={{fontWeight:"600"}}>Total</p>
                       <p style={{fontSize:"1.2rem",fontWeight:"600"}}>R$ 2.499.50</p>
                     </div>
                   </div>
                   <div className='summary-buttons'>
                     <button type='button'><FaCartArrowDown /> Limpar o carrinho</button>
                     <button type='button'><FaCheck /> Finalizar o pedido</button>
                   </div>
                 </div>
            </div>
        </div>

        <div>
          <Footer/>
        </div>
    </div>

  )
}

export default CartShopping