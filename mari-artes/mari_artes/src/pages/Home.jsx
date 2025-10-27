//REACT
import Modal from "react-modal";
import Footer from '../components/Footer/Footer.jsx' 
//JSON
import data_General from "../data/dataGeneral.json"
//CSS
import "./Home.css"
//VÍDEOS
import video1mari from "../assets/videos/vídeo-mari-one.mp4"
import video2mari from "../assets/videos/vídeo-mari-two.mp4"
//IMAGENS
import main_banner1 from "../assets/main-banner1.png"
import main_banner2 from "../assets/main-banner2.png"
import main_banner3 from "../assets/main-banner3.png"
import bag_top5 from "../assets/bag-top5.png"
import bracelet_top5 from "../assets/bracelet-top5.png"
import necklaces_top5 from "../assets/necklaces-top5.png"
import keychain_top5 from "../assets/keychain-top5.png"
import photoframe_top5 from "../assets/photoframe-top5.png"
//ÍCONES
import { TiArrowRightThick } from "react-icons/ti";
import { useState } from "react";
import { useViewTransitionState } from "react-router-dom";

const Home = () => {

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

    <div className='container-main-home'>

      <div className="container-banner-home">
        <div className="slides-banner-home">
            <img src={main_banner1} alt="slide1" className="slide-next"/>
            <img src={main_banner3} alt="slide2" className="slide-next"/>
            <img src={main_banner2} alt="slide3" className="slide-next"/>
        </div>
      </div>

      <div className='gallery-products'>

        <h3>Galeria Artesanal 2025</h3>

        <div className='container-gallery'>
          <ul>
            { data_General && data_General?.map( itemProd => (
              <li key={itemProd.id_Product}>
                <img src={itemProd.photo_Product} alt="imagem do produto" />
                <p style={{marginTop:"20px"}}>{itemProd.description_Product}</p>
                <p style={{marginTop:"20px",color:"#12B2BF",fontWeight:"600",fontSize:"1.5rem",textShadow:".2px .2px .5px black"}}>R$ {checkValue(itemProd.value_Product) ? itemProd.value_Product + "0" : itemProd.value_Product}</p>
                
                <div className='add-remove-cart'>
                  <button type='button'>+</button>
                  <span>1</span>
                  <button type='button'>-</button>
                </div>

                <div className='btn-finally-galery'>
                  <button type='button'>Adicionar ao carrinho</button>
                  <button type='button' onClick={() => openModalDetails(itemProd.description_Product,itemProd.value_Product,itemProd.photo_Product,itemProd.detail_Product)}>Detalhes</button>
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
                <p style={{color:"red"}}>R$ {value}</p>
              </div>
          </div>

          <div className="info-details">
              <p>{detail}</p>
          </div>

          <button type="button" className="btn-close-modal" onClick={closeModalDetails}>FINALIZAR</button>

        </div>

       </Modal>

      </div>

      <div className='frame-mari'>
        <div className='frame-mari-text'>
          <h3>Confira aqui!!!</h3>
          <p>Confira alguns de nossos produtos em destaque</p>
        </div>
          <div className='videos'>
            <div className='video-product'>
              <span><TiArrowRightThick className='icon-video'/> Bolsa de fio náutico preta super estilosa</span>
              <video controls>
                <source src={video1mari} type='video/mp4'/>
                Seu navegador não suporta a execução de vídeos!
              </video>
            </div>
            <div className='video-product'>
              <span><TiArrowRightThick className='icon-video'/> Bolsa de fio náutico azul jeans muito elegante</span>
              <video controls>
                <source src={video2mari} type='video/mp4'/>
                Seu navegador não suporta a execução de vídeos!
              </video>
            </div>
          </div>
      </div>

      <div className='top5-week'>
          <h3>Top 5 - Destaques da semana</h3>
          <p>Confira aqui o nosso top 5 dos destaques da semana...</p>

          <div className='top5-week-products'>
            <div className='top5-product'>
              <img src={bag_top5} alt="produto1 - top 5" className='img-top5'/>
              <span>Bolsa de tela branca 19cm x 12cm (6cm profundidade)</span>
              <span style={{color:"red",textShadow:".3px .3px 1px black",fontSize:"1.3rem"}}>R$ 25.99</span>
            </div>
            <div className='top5-product'>
              <img src={necklaces_top5} alt="produto2 - top 5" className='img-top5'/>
              <span>Colar de safira azul escuro</span>
              <span style={{color:"red",textShadow:".3px .3px 1px black",fontSize:"1.3rem"}}>R$ 79,90</span>
            </div>
            <div className='top5-product'>
              <img src={bracelet_top5} alt="produto3 - top 5" className='img-top5'/>
              <span>Pulseira de cobre dourada</span>
              <span style={{color:"red",textShadow:".3px .3px 1px black",fontSize:"1.3rem"}}>R$ 20,90</span>
            </div>
            <div className='top5-product'>
              <img src={keychain_top5} alt="produto4 - top 5" className='img-top5'/>
              <span>Chaveiro pézinho de cachorro</span>
              <span style={{color:"red",textShadow:".3px .3px 1px black",fontSize:"1.3rem"}}>R$ 10,90</span>
            </div>
            <div className='top5-product'>
              <img src={photoframe_top5} alt="produto5 - top 5" className='img-top5'/>
              <span>Porta-retrato de madeira </span>
              <span style={{color:"red",textShadow:".3px .3px 1px black",fontSize:"1.3rem"}}>R$ 13,90</span>
            </div>
          </div>
      </div>

        <div>
          <Footer/>
        </div>

    </div>

  )
}

export default Home