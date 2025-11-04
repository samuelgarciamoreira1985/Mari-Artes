//REACT
import Footer from '../components/Footer/Footer.jsx' 
import CartClear from '../components/CartClear/CartClear.jsx'
import { useState,useContext } from 'react'
import Swal from "sweetalert2"
import jsPDF from "jspdf"
//CONTEXT
import { CartShoppingContext } from "../context/CartContext.jsx"
//CSS
import "./CartShopping.css"
//ÍCONES
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";

const CartShopping = () => {

    const { cartItems,setCartItems,amountCart,setAmountCart,dateSend,setDateSend,indexAmountCart,setIndexAmountCart,subTotalCart,setSubTotalCart,setTotalCart,totalCart } = useContext(CartShoppingContext)

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

    const roundNumber = (numberTotal,roundParam) => {
        let numTotal = Math.pow(10, roundParam)
        return Math.trunc(numberTotal * numTotal) / numTotal
    }

    const removeRoundItem = (idItemRemoveRound) => {
        const itemValueRoundRemove = cartItems.find(itemRR => itemRR.idItem === idItemRemoveRound)
        if (itemValueRoundRemove) {
            const totalRemove = itemValueRoundRemove.valueItem * itemValueRoundRemove.amountItem
            const calcTotalRemove = totalCart - totalRemove
            const amountTotal = roundNumber(calcTotalRemove,2)
            if (amountTotal <= 0){
              setSubTotalCart(0)
              setTotalCart(0)
            }
            else {
              setSubTotalCart(amountTotal)  
              setTotalCart(amountTotal)
            }
        }
    }

    const removeItemCart = (idItemRemove) => {
        removeRoundItem(idItemRemove)
        const newItemCart = cartItems.filter(itemF => itemF.idItem !== idItemRemove)
        setCartItems(newItemCart)

        // *****CALCULOS
        setAmountCart(amountCart-1) // QUANTIDADE DE ITEMS
        setIndexAmountCart(indexAmountCart-1) // ÍNDICE DE QUANTIDADE NO TOPO DO SITE
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

    //GERAR PDF 
    const generatorPDF = () => {
      // **********INSTANCIAR A BIBLIOTECA PARA GERAR O PDF**************
        const doc = new jsPDF()
        const widthTitle = doc.internal.pageSize.getWidth()
      // **********INÍCIO DO CONTEÚDO PDF**************
        doc.setFontSize(16)
        doc.text("MEU PEDIDO",widthTitle / 2,20, {align: 'center',fontWeight: "600"})

        doc.setFontSize(14)
        doc.text("ÍTENS",widthTitle / 2,35, {align: 'center'})

        doc.setFontSize(12)
        let yPositionId = 90
        let yPositionImage = 50
        let yPositionDescription = 48
        let yPositionAmount = 95
        let yPositionValue = 100
        const imgItem = document.createElement('img')

        {cartItems && cartItems?.map(itemPDF => {
          doc.text(`Id: ${itemPDF.idItem}`,80,yPositionId)
          yPositionId +=65
          imgItem.setAttribute('src',itemPDF.photoItem)
          doc.addImage(imgItem,'PNG',20,yPositionImage,50,50)
          yPositionImage +=65 
          doc.text(`${itemPDF.descriptionItem}`,20,yPositionDescription)
          yPositionDescription +=65
          doc.text(`x ${itemPDF.amountItem}`,80,yPositionAmount)
          yPositionAmount +=65
          doc.text(`R$ ${itemPDF.valueItem}`,80,yPositionValue)
          yPositionValue +=65

          if (yPositionValue > doc.internal.pageSize.getHeight() - 20) {
              doc.addPage();
               yPositionId = 62
               yPositionImage = 22
               yPositionDescription = 20
               yPositionAmount = 67
               yPositionValue = 72
             }
        })}

        doc.setFontSize(14)
        doc.text("RESUMO",20,yPositionValue-45)

        doc.setFontSize(12)
        doc.text(`Subtotal: R$ ${subTotalCart}`,20,yPositionValue-35)
        doc.text(`Quantidade: x ${indexAmountCart}`,20,yPositionValue-28)
        doc.text(`Data do pedido: ${dateSend}`,20,yPositionValue-21)
        doc.text(`Total: R$ ${totalCart}`,20,yPositionValue-14)
      //***********FIM DO CONTEÚDO PDF ****************

      //***********ATRIBUIR O NOME DO ARQUIVO E GERAR O PDF***********/
        doc.save("MeuPedido.pdf")
    } 

    //FINALIZAR O PEDIDO
    const finallyOrderPDF = () => {
      Swal.fire({
             title:"Deseja realmente finalizar o pedido?", 
             icon: "question",
             showCancelButton: true,
             confirmButtonColor: "#30b5d6",
             cancelButtonColor: "#d33",
             cancelButtonText: "Cancelar",
             confirmButtonText: "Confirmar"
            })
          .then((result => {
            if (result.isConfirmed) {
              Swal.fire({
               closeOnClickOutside: false,
               icon: "success",
               title: "PARABÉNS",
               text: "Seu pedido foi finalizado com sucesso e armazenado em um arquivo com a extênsão [*pdf]. Se você estiver utilizando o navegador de forma anônima você poderá selecionar um local para fazer o dowload do arquivo, caso contrário o dowload do arquivo será realizado automaticamente na sua pasta Dowloads.",
               customClass: {
                htmlContainer: 'swal-text-justificado' 
                  }
                })  
                generatorPDF()
              }
          }))   
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
                          <button className='btn-remove-item-cart' onClick={() => removeItemCart(item.idItem)}><MdDelete className='icon-remove'/></button>
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
                     <button type='button' onClick={finallyOrderPDF}><FaCheck /> Finalizar o pedido</button>
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