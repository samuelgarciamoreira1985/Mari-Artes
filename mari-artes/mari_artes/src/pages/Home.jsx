//REACT
import React from 'react'
import Footer from '../components/Footer/Footer.jsx' 
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

const Home = () => {

  return (

    <div className='container-main-home'>

      <div className="container-banner-home">
        <div className="slides-banner-home">
            <img src={main_banner1} alt="slide1" className="slide-next"/>
            <img src={main_banner3} alt="slide2" className="slide-next"/>
            <img src={main_banner2} alt="slide3" className="slide-next"/>
        </div>
      </div>

      <div className='frame-mari'>
        <div className='frame-mari-text'>
          <h3>Confira aqui!!!</h3>
          <p>Confira alguns de nossos produtos</p>
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
              <span>Bolsa escamada vermelha</span>
              <span style={{color:"red",textShadow:".3px .3px 1px black",fontSize:"1.3rem"}}>R$ 49,90</span>
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