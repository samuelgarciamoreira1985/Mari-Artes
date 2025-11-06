//REACT
import { Link } from "react-router-dom"
//CSS
import "./Footer.css"
//ÍCONES
import { BsWhatsapp,BsFacebook  } from "react-icons/bs";
import { FaPhoneFlip } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {

  return (

    <div className="container-footer">
        
        <div className="sub-container-footer">
          <div className="about-mari-footer">
              <h3>Mari Bonecas & Arte</h3>
              <p>Em nosso estoque você encontrará uma grande variedade de produtos de categoria artesanal desde bolsas, colares, pulseiras, chaveiros e porta-retratos. Com nosso diferêncial voltado na produção de bolsas utilizando fio náutico, estamos a todo vapor trabalhando em peças exclusivas com muita dedicação e carinho para melhor atender as suas necessidades, pois a sua satisfação é sempre a nossa missão.</p>
          </div>
          <div className="info-footer">
              <h3>Informações</h3>
              <Link to="/about" className="link-info-footer">Quem somos</Link>
              <Link to="/guidebuy" className="link-info-footer">Como comprar</Link>
              <Link to="/frequentquestions" className="link-info-footer">Perguntas Frequentes</Link>
              <Link to="#" className="link-info-footer">As mais vendidas</Link>
          </div>
          <div className="contact-footer">
              <h3>Entre em contato</h3>
          
              <span><BsWhatsapp style={{marginRight:"10px"}}/>5514988183530</span>
              <span> <FaPhoneFlip style={{marginRight:"10px"}}/>(14) 98818-3530 </span>
               <a href="https://www.facebook.com/profile.php?id=61576002713199&locale=pt_BR" className="link-facebook-footer" target="_blank">
                 <BsFacebook   style={{marginRight:"10px",fontSize:"1rem"}}/>marinhagarcia01@hotmail.com
               </a>
               <Link to="/contactemail" className="link-contact-footer"><AiOutlineMail  style={{marginRight:"10px",fontSize:"1rem"}}/>Fale conosco</Link>
              <span>Rua Francisco Raimundo de Carvalho n° 5-62</span>
              <span style={{marginTop:"3px"}}>17065-209 - Bauru, SP </span>
          </div>
        </div>

        <div className="footer-security">
              <p>Copyright Mari Bonecas & Arte | Produtos de Artesanato - 2025. Todos os direitos reservados.</p>
        </div>

    </div>

  )
}

export default Footer