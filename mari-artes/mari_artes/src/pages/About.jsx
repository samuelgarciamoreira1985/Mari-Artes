//REACT
import Footer from '../components/Footer/Footer.jsx' 
//CSS
import "./About.css"
//IMAGENS
import welcome from "../assets/welcome_about.png"
import about_mari from "../assets/about-mari.png"
import about_samuel from "../assets/about-samuel.png"

const About = () => {

  return (

    <div className="container-about">
        
        <div className='about-initial'>
            <h3>Um pouquinho sobre nós...</h3>
            <img src={welcome} alt="" />
            <div className='p-info-about'>
                <p>A Mari Bonecas & Arte atua no ramo de produtos de artesanato na cidade de Bauru/SP . Ela foi idealizada e realizada para atender as necessidades de nossos clientes apaixonados pela linha artesanal e que desejam ter acesso a uma variada linha de produtos de artesanato, agora expandindo o acesso para on-line podendo assim levar a linha de produtos a mais pessoas a fora.</p>
                <p>Em nosso estoque você encontra uma grande variedade de produtos artesanais desde pulseiras,chaveiros,bolsas,etc. Com nosso diferêncial voltado para a produção de bolsas utilizando fio náutico em telas, estamos a todo vapor desenvolvendo peças exclusivas e desenhadas para melhor atender as suas necessidades e desejos. Não podemos esquecer de comentar que nossas peças são desenhadas e personalizadas seguindo o gosto de cada cliente especifico, desde o tamanho,cor,enfeites adicionais e muito mais. </p>
            </div>
            <h4>Onde estamos?</h4>
            <p className='p-address-about'>Rua Francisco Raimundo de Carvalho n° 5-62 - Nova Esperança - Bauru - SP, 17065-209</p>
            <h5>Venha conferir nossa linha de produtos artesanais, estamos esperando por você!</h5>
        </div>

        <div className='about-finally'>

            <div className='about-mari'>
                <img src={about_mari} alt="foto da Marineusa" />
                <div className='about-mari-section'>
                    <h3>Marineusa Garcia Correa Moreira</h3>
                    <p>Ex-Funcionária pública da prefeitura de Bauru, profissional da educação, formada em Recursos Humanos e apaixonada pelo artesanato. Atuo na área a mais de 10 anos, quando o artesanato entrou na minha vida ainda moça através do crochê, produzindo toalhas e tapetes. Aos poucos fui desenvolvendo a habilidade de produzir bonecas reborn, bolsas,brincos,chaveiros entre outras coisas. Hoje fabrico bolsas em fio náutico de tela, entre outros produtos especificos atendendo os desejos das pessoas que procuram ter um produto artesanal de qualidade.</p>
                    <p>Convido você a conferir tudo o que temos de melhor. Vamos nessa?</p>
                </div>
            </div>

            <div className='about-samuel'>
                <div className='about-samuel-section'>
                    <h3>Samuel Garcia Moreira</h3>
                    <p>Idealizador e desenvolvedor do site desse projeto que é a Mari Bonecas & Arte. Atuo hoje na área da tecnologia podendo estar sempre a frente do desenvolvimento e manutenção desse site, visando fornecer sempre uma melhor experiência para você, cliente querido. Em 2025 estou a cada dia buscando aprimorar minhas habilidades, para que através do meu trabalho, as pessoas possam vislumbrar e realizar o sonho de ter acesso ao fantástico mundo do artesanato.</p>
                    <p>Então o que você me diz? Bora realizar esse sonho juntos?</p>
                </div>
                <img src={about_samuel} alt="foto do Samuel" />
            </div>

        </div>

        <div>
          <Footer/>
        </div>

    </div>

  )
}

export default About