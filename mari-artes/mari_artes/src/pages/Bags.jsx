//REACT
import Footer from '../components/Footer/Footer.jsx' 
//JSON
import data_Bags from "../data/dataBags.json"
//CSS
import "./Bags.css"
//IMAGENS
import bags_banner from "../assets/main-banner1.png"

const Bags = () => {

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
                  <p style={{marginTop:"20px",color:"#12B2BF",fontWeight:"600",fontSize:"1.5rem",textShadow:".2px .2px .5px black"}}>R$ {itemBag.value_Bag}</p>
          
                  <div className='add-remove-cart-bag'>
                    <button type='button'>+</button>
                    <span>1</span>
                    <button type='button'>-</button>
                  </div>
                  <div className='btn-finally-galery-bag'>
                    <button type='button'>Adicionar ao carrinho</button>
                    <button type='button'>Detalhes</button>
                  </div>
                </li>
              )) }
            </ul>
        </div>

      </div>

      <br /><br />

      <div>
          <Footer/>
      </div>

    </div>

  )
}

export default Bags