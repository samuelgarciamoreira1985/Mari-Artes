//REACT
import { Link } from "react-router-dom"
//ÍCONES
import { FaSearch,FaGift,FaShoppingCart   } from "react-icons/fa";
//CSS
import "./MainHeader.css"
//IMAGENS
import logo_mari from "../../assets/logo_mari.png"

const MainHeader = () => {

  return (

    <div className="container-header">
        <Link to="/"><img src={logo_mari} alt="logotipo" style={{cursor:"pointer"}}/></Link>
        <div className="art-logo">
            <p>Mari Bonecas</p>
            <p>& Arte</p>
        </div>
        <label>
            <input type="text" 
            name="n-description-search"
            placeholder="O que você está buscando?"
            />
            <button type="button" className="btn-search-header">
                <FaSearch className="icon-search-header"/>
            </button>
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