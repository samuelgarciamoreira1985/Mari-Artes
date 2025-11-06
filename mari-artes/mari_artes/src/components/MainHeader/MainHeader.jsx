//REACT
import { Link } from "react-router-dom"
import { useContext } from "react";
import Swal from "sweetalert2"
//ÍCONES
import { FaSearch,FaGift,FaShoppingCart   } from "react-icons/fa";
import { RiCircleFill } from "react-icons/ri";
//CSS
import "./MainHeader.css"
//CONTEXT
import { CartShoppingContext } from "../../context/CartContext.jsx"
import { OthersFeaturesContext } from "../../context/OthersContext.jsx"
//IMAGENS
import logo_mari from "../../assets/logo_mari.png"
import logo_mari_finally from "../../assets/logo_mari_finally.png"

const MainHeader = () => {

    const { indexAmountCart } = useContext(CartShoppingContext)
    const {  searchInputValue,setSearchInputValue,sectionSearchRef } = useContext(OthersFeaturesContext)

    const changeinputSearch = (e) => {
        setSearchInputValue(e.target.value)
    }

    const scrollSearch = () => {
        if (searchInputValue.toLowerCase().includes("bolsa") || searchInputValue.toLowerCase().includes("bolsas")) {
            sectionSearchRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        } else {
            Swal.fire({
              closeOnClickOutside: false,
              icon: "warning",
              title: "ATENÇÃO!",
              text: "Parâmetro de busca não aceito no sistema!"
              }) 
              }
    }

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
            value={searchInputValue}
            onChange={changeinputSearch}
            />
                <FaSearch className="icon-search-header" onClick={scrollSearch}/>
        </label>
        
        <div className="gift-cart-header">
            <div className="gift-header">
                <Link to="/guidebuy"><button className="btn-gift">
                    <FaGift className="icon-gift"/>
                </button></Link>
                <span className="span-gift-cart">Como comprar</span>
            </div>
            <div className="cart-header">
                <Link to="/cartshopping"><button className="btn-cart">
                    <FaShoppingCart  className="icon-cart"/>
                    <span className="amount-cart-home">{indexAmountCart}</span>
                </button></Link>
                <span className="span-gift-cart">Meu carrinho</span>
            </div>
        </div>
    </div>

  )
}

export default MainHeader