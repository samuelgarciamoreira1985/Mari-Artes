//REACT
import { Link } from "react-router-dom"
//ÍCONES
import { FaSearch,FaGift,FaShoppingCart   } from "react-icons/fa";
//CSS
import "./MainHeader.css"
//IMAGENS
import logo_mari from "../../assets/logo_mari.png"
import logo_mari_finally from "../../assets/logo_mari_finally.png"

const MainHeader = () => {

  return (

    <div className="container-header">
        <Link to="/"><img src={logo_mari_finally} alt="logotipo" style={{cursor:"pointer"}}/></Link>
        <div className="art-logo">
            <p>Mari Bonecas</p>
            <p>& Arte</p>
        </div>
        <label>
            <input type="text" 
            name="n-description-search"
            placeholder="O que você está buscando?"
            />
                <FaSearch className="icon-search-header"/>
        </label>
        
        <div className="gift-cart-header">
            <div className="gift-header">
                <button className="btn-gift">
                    <FaGift className="icon-gift"/>
                </button>
                <span className="span-gift-cart">Como comprar</span>
            </div>
            <div className="cart-header">
                <button className="btn-cart">
                    <FaShoppingCart  className="icon-cart"/>
                </button>
                <span className="span-gift-cart">Meu carrinho</span>
            </div>
        </div>
    </div>

  )
}

export default MainHeader