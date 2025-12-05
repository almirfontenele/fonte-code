import { FaCode } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <FaCode className="footer-logo" />
            <h3>Fonte Code</h3>
            <p>Transformando ideias em soluções digitais</p>
          </div>
          <div className="footer-info">
            <p>&copy; {currentYear} Fonte Code. Todos os direitos reservados.</p>
            <p>CEO: Almir Fontenele</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

