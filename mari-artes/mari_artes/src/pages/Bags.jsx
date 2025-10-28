//REACT
import Footer from '../components/Footer/Footer.jsx' 
import { useState } from 'react'
import Modal from "react-modal";
//JSON
import data_Bags from "../data/dataBags.json"
//CSS
import "./Bags.css"
//IMAGENS
import bags_banner from "../assets/main-banner1.png"

const Bags = () => {

    const [isOpenDetails,setIsOpenDetails] = useState("") // MODAL - DETALHES DOS PRODUTOS
    const [description,setDescription] = useState("")
    const [value,setValue] = useState("")
    const [photo,setPhoto] = useState("")
    const [detail,setDetail] = useState("")
  
    const checkValue = (valueSaleComm) => {
      const decimalPart = valueSaleComm.toString().split(".")[1] || ''
      const numberDecimal = decimalPart.length
      if (numberDecimal === 1)
      return numberDecimal + "0"    
      }

      const openModalDetails = (descriptionValue,valueValue,photoValue,detailValue) => {
        setDescription(descriptionValue)
        setValue(valueValue)
        setPhoto(photoValue)
        setDetail(detailValue)
        setIsOpenDetails(true)
        //alert(descriptionValue)
      }

       const closeModalDetails = () => {
        setIsOpenDetails(false)
       }

  return (

    <div className='container-bags'>
      
      <div className='container-banner-bags'>
          <img src={bags_banner} alt="banner da interface de bolsas" />
          <p>Bolsas</p>
      </div>

      <div className='gallery-bags'>

        <h3>Galeria de Bolsas 2025</h3>

        <div className='container-galery-bags'>
          <ul>
              { data_Bags && data_Bags?.map( itemBag => (
                <li key={itemBag.id_Bag}>
                  <img src={itemBag.photo_Bag} alt="imagem do produto" />
                  <p style={{marginTop:"20px"}}>{itemBag.description_Bag}</p>
                  <p style={{marginTop:"20px",color:"#12B2BF",fontWeight:"600",fontSize:"1.5rem",textShadow:".2px .2px .5px black"}}>R$ {checkValue(itemBag.value_Bag) ? itemBag.value_Bag + "0" : itemBag.value_Bag}</p>
          
                  <div className='add-remove-cart-bag'>
                    <button type='button'>+</button>
                    <span>1</span>
                    <button type='button'>-</button>
                  </div>
                  <div className='btn-finally-galery-bag'>
                    <button type='button'>Adicionar ao carrinho</button>
                    <button type='button' onClick={() => openModalDetails(itemBag.description_Bag,itemBag.value_Bag,itemBag.photo_Bag,itemBag.detail_Bag)}>Detalhes</button>
                  </div>
                </li>
              )) }
            </ul>
        </div>

              <Modal
                isOpen={isOpenDetails}
                onRequestClose={closeModalDetails}
                ariaHideApp={false}
                className="modal-details"
                >
        
                <div className="container-modal-details">
        
                  <div className="title-details">
                      <h3>Detalhes do produto</h3>
                      <button type="button" onClick={closeModalDetails}>X</button>
                  </div>
        
                  <div className="description-details">
                      <img src={photo} alt="foto do produto detalhado" />
                      <div className="description-details-info">
                        <p>{description}</p>
                        <p style={{color:"red"}}>R$ {checkValue(value) ? value + "0" : value}</p>
                      </div>
                  </div>
        
                  <div className="info-details">
                      <p>{detail}</p>
                  </div>
        
                  <button type="button" className="btn-close-modal" onClick={closeModalDetails}>FINALIZAR</button>
        
                </div>
        
               </Modal>

      </div>

      <br /><br />

      <div>
          <Footer/>
      </div>

    </div>

  )
}

export default Bags