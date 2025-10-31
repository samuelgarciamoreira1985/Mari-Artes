//CSS
import "./CartClear.css"
//ÍCONES
import { BsFillCartDashFill } from "react-icons/bs";

const CartClear = () => {

  return (

    <div className="container-info-cart">
        <div className="msg-cart">
          <span>O CARRINHO DE COMPRAS <BsFillCartDashFill /> ESTÁ VAZIO...</span>
        </div>
    </div>

  )

}

export default CartClear