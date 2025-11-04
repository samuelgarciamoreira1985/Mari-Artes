//REACT
import Footer from '../components/Footer/Footer.jsx' 
import emailjs from '@emailjs/browser';
import { useState,useRef } from 'react';
import Swal from "sweetalert2"
//CSS
import "./ContactEmail.css"

const ContactEmail = () => {

  const formEmail = useRef() // REFERÊNCIA AO FORMULÁRIO DO EMAIL
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [subject,setSubject] = useState("")
  const [messenger,setMessenger] = useState("")

  const formData = {
    name: name,
    email: email,
    subject: subject,
    message: messenger
  }

  emailjs.init('9rYcJkJt0nAC70YTO') // PUBLIC ID

  const sendEmail = (e) => {
        e.preventDefault()
        emailjs.send("service_zjfrp84","template_jygzekd",formData) // SERVICE ID.TEMPLATE ID
        .then(() => {
            Swal.fire({
              closeOnClickOutside: false,
              icon: "success",
              title: "PARABÉNS!",
              text: "Email enviado com sucesso!"
              }) 
            })
            document.getElementById("form_contact").reset()
    }

  return (

    <div className='container-email-order'>

        <div className='title-email'>
          <h3>Fale conosco ou envie seu pedido...</h3>
          <h4>Contato</h4>
        </div>

        <section className='group-form-email-order'>

          <form className='form-email-order' ref={formEmail} onSubmit={sendEmail} id='form_contact'>

            <div className='name-email'>
              <label className='lbl-name-email-order'>
                <span>Nome *</span>
                <input type="text"
                name='name-email'
                onChange={(e) => setName(e.target.value)}
                required
                />
              </label>
              <label className='lbl-name-email-order'>
                <span>Email *</span>
                <input type="email"
                name='email-email'
                onChange={(e) => setEmail(e.target.value)}
                required
                />
              </label>
            </div>

            <div className='subject-msg-attachment'>
              <label className='lbl-subject-msg-attachment-order'>
                <span>Assunto</span>
                <input type="text"
                name='subject-email'
                onChange={(e) => setSubject(e.target.value)}
                />
              </label>
              <label className='lbl-subject-msg-attachment-order'>
                <span>Mensagem *</span>
                <textarea 
                name="messenger-email" 
                id="txt-area-msg"
                onChange={(e) => setMessenger(e.target.value)}
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
              <button type='submit' className='btn-send-email-order'>Enviar</button>
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