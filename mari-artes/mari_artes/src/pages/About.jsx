//REACT
import Footer from '../components/Footer/Footer.jsx' 
//CSS
import "./About.css"
//IMAGENS
import welcome from "../assets/welcome_about.png"

const About = () => {

  return (

    <div className="container-about">
        
        <div className='about-initial'>
            <h3>Um pouquinho sobre nós...</h3>
            <img src={welcome} alt="" />
            <p>A Mari Bonecas & Arte atua no ramo de produtos de artesanato na cidade de Bauru/SP . Ela foi idealizada e realizada para atender as necessidades de nossos clientes apaixonados pela linha artesanal e que desejam ter acesso a uma variada linha de produtos de artesanato, agora expandindo o acesso para on-line podendo assim levar a linha de produtos a mais pessoas a fora.</p>
            <p>Em nosso estoque você encontra uma grande variedade de produtos artesanais desde pulseiras,chaveiros,bolsas,etc. Com nosso diferêncial voltado para a produção de bolsas utilizando fio náutico em telas, estamos a todo vapor desenvolvendo peças exclusivas e desenhadas para melhor atender as suas necessidades e desejos. Não podemos esquecer de comentar que nossas peças são desenhadas e personalizadas seguindo o gosto de cada cliente especifico, desde o tamanho,cor,enfeites adicionais e muito mais. </p>
            <h4>Onde estamos?</h4>
            <p>Rua Francisco Raimundo de Carvalho n° 5-62 - Nova Esperança - Bauru - SP, 17065-209</p>
            <h5>Venha conferir nossa linha de produtos artesanais, estamos esperando por você!</h5>
        </div>

        <div className='about-finally'>

        </div>

        <div>
          <Footer/>
        </div>

    </div>

  )
}

export default About