import { useContext,createContext, useState } from "react";

export const CartShoppingContext = createContext()

export const CartShoppingProvider = ({ children }) => {

    const [cartItems,setCartItems] = useState([
        {
            "idItem":"1",
            "photoItem":"/products-sale/bag2.png",
            "descriptionItem":"Bolsa de tela preto carvão 19cm x 12cm (6cm profundidade)",
            "valueItem": 24.99
        },
        {
            "idItem":"2",
            "photoItem":"/products-sale/bag3.png",
            "descriptionItem":"Bolsa de tela marrom 23cm x 10cm (6cm profundidade)",
            "valueItem": 22.99
        },
        {
            "idItem":"3",
            "photoItem":"/products-sale/bag4.png",
            "descriptionItem":"Bolsa de tela preta 19cm x 12cm (6cm profundidade)",
            "valueItem": 25.99
        },
        {
            "idItem":"4",
            "photoItem":"/products-sale/bag5.png",
            "descriptionItem":"Bolsa de tela laranja 19cm x 12cm (6cm profundidade)",
            "valueItem": 30.99
        }
    ])

    return (
        <CartShoppingContext.Provider value={{cartItems,setCartItems}}>
            {children}
        </CartShoppingContext.Provider>
    )

}