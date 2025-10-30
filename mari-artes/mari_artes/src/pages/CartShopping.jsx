//REACT
import Footer from '../components/Footer/Footer.jsx' 
import CartClear from '../components/CartClear/CartClear.jsx'
import { useState,useContext } from 'react'
import Swal from "sweetalert2"
//CONTEXT
import { CartShoppingContext } from "../context/CartContext.jsx"
//CSS
import "./CartShopping.css"
//ÍCONES
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";

const CartShopping = () => {

    const { cartItems,setCartItems,amountCart,dateSend,setDateSend,indexAmountCart,setIndexAmountCart,subTotalCart,setSubTotalCart,setTotalCart,totalCart } = useContext(CartShoppingContext)

    // COLETA DE DATA DO SISTEMA...
    const dateSystemObj = new Date()
    const dateCart = dateSystemObj.toLocaleDateString()
    setDateSend(dateCart)

    const checkValue = (valueSaleComm) => {
    const decimalPart = valueSaleComm.toString().split(".")[1] || ''
    const numberDecimal = decimalPart.length
    if (numberDecimal === 1)
    return numberDecimal + "0"    
    }

    const clearCart = () => { // LIMPAR CARRINHO DE COMPRAS
      if (cartItems.length === 0) {
          Swal.fire({
            closeOnClickOutside: false,
            icon: "warning",
            title: "ATENÇÃO!",
            text: "O carrinho de compras já se encontra vazio!"
            }) 
      } else {
            Swal.fire({
             title:"Deseja realmente limpar o carrinho de compras?", 
             icon: "question",
             showCancelButton: true,
             confirmButtonColor: "#30b5d6",
             cancelButtonColor: "#d33",
             cancelButtonText: "Cancelar",
             confirmButtonText: "Confirmar"
            })
          .then((result => {
            if (result.isConfirmed) {
              setCartItems([])
              setIndexAmountCart(0)
              setSubTotalCart(0)
              setTotalCart(0)
              Swal.fire({
               closeOnClickOutside: false,
               icon: "success",
               title: "PARABÉNS",
               text: "O carrinho de compras foi limpo com sucesso!"
                })  
              }
          }))   
      }

    }

  return (

    <div className='container-cart-shopping'>

        <h3 className='title-cart-shopping'>Carrinho de Compras</h3>

        {cartItems.length === 0 ? <CartClear/> : <div className='container-shopping-items-summary'>
            
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
                       <p>R$ {checkValue(subTotalCart) ? subTotalCart + "0" : subTotalCart}</p>
                     </div>
                     <div className='summary-amount'>
                       <p>Quantidade</p>
                       <p>{indexAmountCart} un</p>
                     </div>
                     <div className='summary-date'>
                       <p>Data do pedido</p>
                       <p>{dateSend}</p>
                     </div>
                     <div className='summary-value'>
                       <p style={{fontWeight:"600"}}>Total</p>
                       <p style={{fontSize:"1.2rem",fontWeight:"600"}}>R$ {checkValue(totalCart) ? totalCart + "0" : totalCart}</p>
                     </div>
                   </div>
                   <div className='summary-buttons'>
                     <button type='button' onClick={clearCart}><FaCartArrowDown /> Limpar o carrinho</button>
                     <button type='button'><FaCheck /> Finalizar o pedido</button>
                   </div>
                 </div>
            </div>
        </div>}

        <div>
          <Footer/>
        </div>
    </div>

  )
}

export default CartShopping