//REACT
import Footer from '../components/Footer/Footer.jsx' 
//CSS
import "./Home.css"
//IMAGENS
import slideMain from "../assets/slide-atual.png"
import slide2 from "../assets/slide2.png"
import slide3 from "../assets/slide3.png"
import bag_top5 from "../assets/bag-top5.png"
import bracelet_top5 from "../assets/bracelet-top5.png"
import necklaces_top5 from "../assets/necklaces-top5.png"
import keychain_top5 from "../assets/keychain-top5.png"
import photoframe_top5 from "../assets/photoframe-top5.png"

const Home = () => {

  return (

    <div className='container-main-home'>

      <div className="container-banner-home">
        <div className="slides-banner-home">
            <img src={slideMain} alt="slide1" className="slide-atual"/>
            <img src={slide2} alt="slide2" className="slide-next"/>
            <img src={slide3} alt="slide3" className="slide-next"/>
        </div>
      </div>

      <div className='frame-mari'>
        <div className='frame-mari-text'>
          <h3>Vídeo explicativo - título</h3>
          <p>descrição do vídeo explicativo</p>
        </div>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/kchv2fnbMlc?si=nxzlphQy6Svcbw6n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      <div className='top5-week'>
          <h3>Top 5 - Destaques da semana</h3>
          <p>Confira aqui o nosso top 5 dos destaques da semana...</p>

          <div className='top5-week-products'>
            <img src={bag_top5} alt="produto1 - top 3" className='img-top5'/>
            <img src={bracelet_top5} alt="produto2 - top 3" className='img-top5'/>
            <img src={necklaces_top5} alt="produto3 - top 3" className='img-top5'/>
            <img src={keychain_top5} alt="produto3 - top 4" className='img-top5'/>
            <img src={photoframe_top5} alt="produto3 - top 5" className='img-top5'/>
          </div>
      </div>

        <div>
          <Footer/>
        </div>

    </div>

  )
}

export default Home