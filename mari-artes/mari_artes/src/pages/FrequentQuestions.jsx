//REACT
import Footer from '../components/Footer/Footer.jsx' 
//CSS
import "./FrequentQuestions.css"
//ÍCONES
import { BsWhatsapp,BsFacebook } from "react-icons/bs";
import { FaCcVisa,FaCcMastercard  } from "react-icons/fa";
import { FaMoneyBill1Wave,FaPix,FaPhoneFlip } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";

const FrequentQuestions = () => {

  return (

    <div className="container-frequentquestions">
        
        <div className="frequentquestions-titledesc">
            <h3>Perguntas Frequentes</h3>
            <p>Nessa página sugerimos que você leia e analise com atenção todas as pontuações propostas, pois trata-se de questões que podem ser relevantes para seu entendimento e compreensão sobre o funcionamento de nosso site e os métodos que poderão ser importantes para sua experiência conosco. Desde já, agradecemos a sua atenção.</p>
        </div>

        <div className='frequentquestions-response'>

            <div className='question-response'>
                <h4>Quando vai chegar o meu pedido?</h4>
                <p>O tempo de entrega do pedido será determinado após ser totalmente finalizado o pedido solicitado pela nossa linha de produção e dependerá do tipo de envio combinado entre a gente. Entretanto devemos informar que os prazos de entrega podem sofrer variações de acordo com a demanda dos pedidos. Para mais informações entre em contato conosco através do whatssap <BsWhatsapp/> (14) 98818-3530.</p>
            </div>

            <div className='question-response'>
                <h4>Quais são as formas de pagamento disponíveis para realizar minha compra?</h4>
                <span className='payment-P'>* Meios de pagamento</span>
                <div className='payment-money'>
                    <FaCcVisa className='icon-payment'/>
                    <FaCcMastercard  className='icon-payment'/>
                    <FaMoneyBill1Wave className='icon-payment'/>
                    <FaPix  className='icon-payment'/> 
                </div>
            </div>

            <div className='question-response'>
                <h4>Como são realizados os envios?</h4>
                <p>Trabalhamos com entregas enviadas diretamente pelos correios, na qual o produto é enviado com todo cuidado necessário, mas também realizamos a entrega pessoalmente caso combinado entre ambas as partes.</p>
            </div>

            <div className='question-response'>
                <h4>Qual é o custo do envio?</h4>
                <p>Como trabalhamos de forma a discutir as formas de envio, o custo será calculado com base no valor da compra e da sua localização.</p>
            </div>

            <div className='question-response'>
                <h4>Onde posso receber meu pedido?</h4>
                <p>Realizamos envios para todo o país.</p>
            </div>

            <div className='question-response'>
                <h4>Qual o prazo para realizar uma troca?</h4>
                <p>No caso de arrependimento da compra, você tem até 7 dias após a compra, para solicitar o estorno do pagamento.</p>
            </div>

            <div className='question-response'>
                <h4>O que devo fazer caso meu produto não chegue em bom estado?</h4>
                <p>* Você pode entrar em contato conosco através de nossos meios de comunicação.</p>
                <div className='social-response'>
                    <p><BsWhatsapp className='icon-social'/> (14) 98818-3530</p>
                    <p><FaPhoneFlip className='icon-social'/> (14) 98818-3530</p>
                    <p><BsFacebook className='icon-social'/> marinhagarcia01@hotmail.com</p>
                    <p><AiOutlineMail className='icon-social'/> marinhagarcia01@hotmail.com</p>
                </div>
            </div>

        </div>

        <div>
          <Footer/>
        </div>

    </div>

  )
}

export default FrequentQuestions