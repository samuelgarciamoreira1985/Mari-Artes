//REACT
import Footer from '../components/Footer/Footer.jsx' 
//ÍCONES
import { FaShoppingCart   } from "react-icons/fa";
//CSS
import "./GuideBuy.css"
//IMAGENS
import search_tutorial from "../assets/tutorial/search-product-tutorial.png"
import nav_tutorial from "../assets/tutorial/nav-tutorial.png"
import add_tutorial from "../assets/tutorial/add-tutorial.png"
import myCart_tutorial from "../assets/tutorial/myCart-tutorial.png"

const GuideBuy = () => {

  return (

    <div className="container-guidebuy">
        
        <div className='title-guidebuy'>
            <h3>Como posso realizar minhas compras ??? <FaShoppingCart/><FaShoppingCart/><FaShoppingCart/></h3>
            <div className='p-title-guidebuy'>
                <p>Querido cliente, em nosso estoque você encontrará uma variedade incrível de produtos de artesanato. As compras não podem ser efetuadas diretamente pelo site, pois nesse momento o mesmo funciona somente como um catálogo virtual para que você possa conhecer nossos produtos, porém você pode adicionar seus produtos em um carrinho de compras cuja opção fica visível no lado superior direito da página principal do site. Após montar o carrinho de compras, você poderá enviar seus pedidos diretamente para nós através de email, facebook, whats ou até mesmo conversar conosco caso haja qualquer tipo de dúvida.</p>
                <p>Para realizar o processo de pedido, você pode utilizar o campo de pesquisa no topo deste site na página principal para realizar uma busca por uma categoria de produto específica ou poderá navegar em todo o site página por página se preferir analisar cada ítem de nosso estoque. Após escolher um produto, você terá opção de exibir detalhes desse produto ou adiciona-lo ao seu carrinho de compras.</p>
                <p>Após montado o carrinho de compras, você pode nos enviar seus pedidos através das nossas opções de contato, <span style={{fontWeight:"600"}}>porém sugerimos que use preferêncialmente o envio por e-mail.</span> Após recebermos seu pedido, entraremos em contato para discutir sobre preferências individuais de personalização do produto,data prevista para entrega, formas de envio e formas de pagamento.</p>
                <h5><span style={{fontSize:"1rem"}}>*</span> Obrigado pela sua atenção querido cliente, e desde já agradecemos sua preferência!</h5>
            </div>
        </div>

        <div className='tutorial-guidebuy'>

           <h3>Para facilitar sua experiência em nosso site, segue abaixo um tutorial de como comprar...</h3>

            <div className='tutorial-slides'>
                <div className='slides-unique'>
                    <h4>1° Digite no campo de pesquisa o produto que você deseja buscar no site.</h4>
                    <img src={search_tutorial} alt="imagem do campo de busca de produtos" />
                </div>
                <div className='slides-unique'>
                    <h4>2° Ou selecione nas opções do menu para ter acesso as categorias de produtos de maneira individual.</h4>
                    <img src={nav_tutorial} alt="imagem do menu da página principal" />
                </div>
                <div className='slides-unique'>
                    <h4 style={{maxWidth:"70vw",textAlign:"justify"}}>3° Cada produto possui seu valor individual exibido logo após a sua foto. Clique nos botões de <span style={{textDecoration:"underline"}}>+ ou -</span> para aumentar ou diminuir a quantidade desejada para a aquisição do produto. Após definir a quantidade do produto, clique no botão <span style={{textDecoration:"underline"}}>adicionar ao carrinho</span> para adicionar o produto no carrinho de compras. você também pode verificar os detalhes do produto clicando no botão <span style={{textDecoration:"underline"}}>Detalhes.</span> </h4>
                    <img src={add_tutorial} alt="imagem dos botões de operação dos produtos" />
                </div>
                <div className='slides-unique'>
                    <h4 style={{maxWidth:"70vw",textAlign:"justify"}}>4° Após adicionar o produto no carrinho,  a quantidade do carrinho será atualizada e exibida na parte superior direita do site junto ao ícone do carrinho de compras. </h4>
                    <img src={myCart_tutorial} alt="imagem da quantidade de produtos no carrinho de compras" />
                </div>
            </div>

        </div>

        <div>
            <Footer/>
        </div>

    </div>

  )
}

export default GuideBuy