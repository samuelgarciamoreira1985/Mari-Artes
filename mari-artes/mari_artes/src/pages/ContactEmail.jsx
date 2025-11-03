//REACT
import Footer from '../components/Footer/Footer.jsx' 
//CSS
import "./ContactEmail.css"

const ContactEmail = () => {

  return (

    <div className='container-email-order'>

        <div className='title-email'>
          <h3>Fale conosco ou envie seu pedido...</h3>
          <h4>Contato</h4>
        </div>

        <section className='group-form-email-order'>

          <form className='form-email-order'>

            <div className='name-email'>
              <label className='lbl-name-email-order'>
                <span>Nome *</span>
                <input type="text"
                required
                />
              </label>
              <label className='lbl-name-email-order'>
                <span>Email *</span>
                <input type="email"
                required
                />
              </label>
            </div>

            <div className='subject-msg-attachment'>
              <label className='lbl-subject-msg-attachment-order'>
                <span>Assunto</span>
                <input type="text"
                />
              </label>
              <label className='lbl-subject-msg-attachment-order'>
                <span>Mensagem *</span>
                <textarea name="" 
                id="txt-area-msg"
                required
                >
                </textarea>
              </label>
              <label className='lbl-subject-msg-attachment-order'>
                <span>Anexos</span>
                <input type="text"
                />
                <div className='group-btn-info'>
                  <button type='button' className='btn-attachment'>Adicione o arquivo</button>
                  <span>*Clique no botão ao lado e selecione o arquivo para enviar...</span>
                </div>
              </label>
            </div>

            <div className='group-btn-send'>
              <button type='button' className='btn-send-email-order'>Enviar</button>
            </div>

          </form>

        </section>

        <div>
          <Footer/>
        </div>
        
    </div>

  )
}

export default ContactEmail