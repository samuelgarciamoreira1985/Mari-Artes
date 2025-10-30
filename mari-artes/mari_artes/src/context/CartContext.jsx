import { useContext,createContext, useState } from "react";

export const CartShoppingContext = createContext()

export const CartShoppingProvider = ({ children }) => {

    const [subTotalCart,setSubTotalCart] = useState(0) // SUBTOTAL DO VALOR DO CARRINHO DE COMPRAS
    const [totalCart,setTotalCart] = useState(0) // TOTAL DO VALOR DO CARRINHO DE COMPRAS
    const [dateSend,setDateSend] = useState("") // DATA DO SISTEMA
    const [indexAmountCart,setIndexAmountCart] = useState(0) // ÍNDICE DE QUANTIDADE DE ÍTENS DO CARRINHO DE COMPRAS
    const [amountCart,setAmountCart] = useState(0) // QUANTIDADE DE PRODUTO INDIVIDUAL NO CARRINHO DE COMPRAS
    const [cartItems,setCartItems] = useState([ // OBJETO QUE CONTÉM O ÍTEM DO CARRINHO DE COMPRAS
        
    ])

    return (
        <CartShoppingContext.Provider value={{cartItems,setCartItems,amountCart,setAmountCart,indexAmountCart,setIndexAmountCart,dateSend,setDateSend,subTotalCart,setSubTotalCart,totalCart,setTotalCart}}>
            {children}
        </CartShoppingContext.Provider>
    )

}