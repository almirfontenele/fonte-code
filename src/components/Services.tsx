import { FaCode, FaMobileAlt, FaCloud, FaShieldAlt, FaRocket, FaChartLine } from 'react-icons/fa'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: 'Desenvolvimento Web',
      description: 'Sites e aplicações web modernas, responsivas e de alto desempenho'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Aplicativos Web',
      description: 'Aplicações web progressivas (PWA) com experiência mobile-first'
    },
    {
      icon: <FaCloud />,
      title: 'Cloud & DevOps',
      description: 'Infraestrutura na nuvem AWS com CI/CD e automação completa'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Segurança',
      description: 'Aplicações seguras com melhores práticas de segurança e compliance'
    },
    {
      icon: <FaRocket />,
      title: 'Performance',
      description: 'Otimização para velocidade e escalabilidade empresarial'
    },
    {
      icon: <FaChartLine />,
      title: 'Análise de Dados',
      description: 'Soluções de BI e análise de dados para tomada de decisões estratégicas'
    }
  ]

  return (
    <section id="servicos" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">
            Soluções completas em desenvolvimento web para impulsionar seu negócio
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

