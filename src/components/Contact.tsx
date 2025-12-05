import { useState, FormEvent } from 'react'
import { FaEnvelope, FaWhatsapp, FaUser, FaPhone, FaPaperPlane, FaSpinner } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import { emailjsConfig } from '../config/emailjs'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      // Verificar se as credenciais do EmailJS estão configuradas
      if (!emailjsConfig.publicKey || !emailjsConfig.serviceId || !emailjsConfig.templateId) {
        // Fallback para mailto se EmailJS não estiver configurado
        const subject = encodeURIComponent(`Contato do Site - ${formData.name}`)
        const body = encodeURIComponent(
          `Nome: ${formData.name}\n` +
          `Email: ${formData.email}\n` +
          `Telefone: ${formData.phone}\n\n` +
          `Mensagem:\n${formData.message}`
        )
        window.location.href = `mailto:${emailjsConfig.toEmail}?subject=${subject}&body=${body}`
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
        setLoading(false)
        return
      }

      // Inicializar EmailJS
      emailjs.init(emailjsConfig.publicKey)

      // Preparar os parâmetros do template
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Não informado',
        message: formData.message,
        to_email: emailjsConfig.toEmail,
        reply_to: formData.email
      }

      // Enviar email
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams
      )

      // Sucesso
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '' })
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (err) {
      console.error('Erro ao enviar email:', err)
      setError('Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato diretamente por email.')
    } finally {
      setLoading(false)
    }
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
            {error && (
              <div className="error-message">
                {error}
              </div>
            )}
            {submitted && (
              <div className="success-message">
                ✓ Mensagem enviada com sucesso! Entraremos em contato em breve.
              </div>
            )}
            <button 
              type="submit" 
              className="submit-button"
              disabled={loading}
            >
              {loading ? (
                <>
                  <FaSpinner className="spinner" /> Enviando...
                </>
              ) : (
                <>
                  <FaPaperPlane /> Enviar Mensagem
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

