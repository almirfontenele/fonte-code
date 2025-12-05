import { useState, FormEvent } from 'react'
import { FaEnvelope, FaWhatsapp, FaUser, FaPhone, FaPaperPlane } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    
    // Criar link mailto
    const subject = encodeURIComponent(`Contato do Site - ${formData.name}`)
    const body = encodeURIComponent(
      `Nome: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Telefone: ${formData.phone}\n\n` +
      `Mensagem:\n${formData.message}`
    )
    
    window.location.href = `mailto:almirafo@gmail.com?subject=${subject}&body=${body}`
    
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', message: '' })
    
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const openWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da Fonte Code.')
    window.open(`https://wa.me/5511998884534?text=${message}`, '_blank')
  }

  return (
    <section id="contato" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">
            Estamos prontos para transformar sua ideia em realidade
          </p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon email">
                <FaEnvelope />
              </div>
              <h3>Email</h3>
              <a href="mailto:almirafo@gmail.com">almirafo@gmail.com</a>
            </div>
            <div className="contact-card">
              <div className="contact-icon whatsapp">
                <FaWhatsapp />
              </div>
              <h3>WhatsApp</h3>
              <button onClick={openWhatsApp} className="whatsapp-button">
                +55 11 99888-4534
              </button>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">
                <FaUser /> Nome Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Seu nome"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                <FaEnvelope /> Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="seu@email.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">
                <FaPhone /> Telefone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(11) 99999-9999"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Conte-nos sobre seu projeto..."
              />
            </div>
            {submitted && (
              <div className="success-message">
                ✓ Mensagem enviada! Verifique seu cliente de email.
              </div>
            )}
            <button type="submit" className="submit-button">
              <FaPaperPlane /> Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

