import { useState } from 'react'
import './Hero.css'

const Hero = () => {
  const [logoError, setLogoError] = useState(false)
  
  // Logo deve estar na pasta public para ser acessível
  const logoPath = `${import.meta.env.BASE_URL}fonte-code-logo.png`

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          {!logoError ? (
            <img 
              src={logoPath}
              alt="Fonte Code Logo" 
              className="hero-logo"
              onError={() => {
                // Se a imagem não carregar, mostra o placeholder
                setLogoError(true)
              }}
            />
          ) : (
            <div className="hero-logo-placeholder">
              <h2 className="logo-text">Fonte Code</h2>
            </div>
          )}
          <h1 className="hero-title">
            Transformando Ideias em <span className="highlight">Soluções Digitais</span>
          </h1>
          <p className="hero-subtitle">
            Desenvolvimento profissional de sites e aplicativos web com tecnologia de ponta
          </p>
          <div className="hero-badges">
            <span className="badge">✓ 10+ Anos de Experiência</span>
            <span className="badge">✓ Soluções Inovadoras</span>
            <span className="badge">✓ Resultados Comprovados</span>
          </div>
          <a href="#contato" className="cta-button">
            Entre em Contato
          </a>
        </div>
      </div>
      <div className="hero-wave">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="currentColor"/>
        </svg>
      </div>
    </section>
  )
}

export default Hero

