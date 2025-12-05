import { FaJava, FaPython, FaJs, FaAws, FaDocker, FaGitAlt } from 'react-icons/fa'
import { SiTypescript, SiSpring, SiPostgresql, SiNodedotjs } from 'react-icons/si'
import './About.css'

const About = () => {
  const technologies = [
    { name: 'Java', icon: <FaJava /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Spring', icon: <SiSpring /> },
    { name: 'Node.js', icon: <SiNodedotjs /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'AWS', icon: <FaAws /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'Git', icon: <FaGitAlt /> }
  ]

  const competencies = [
    {
      category: 'Linguagens',
      items: 'Java, Python, JavaScript, TypeScript, PHP, Go, Lua, PL/SQL'
    },
    {
      category: 'Frameworks',
      items: 'Spring, Hibernate, JSF, PrimeFaces, JPA, Django, AngularJS, NodeJS, Bootstrap'
    },
    {
      category: 'Bancos de Dados',
      items: 'NoSQL, PostgreSQL, SQL Server, Oracle, JSON'
    },
    {
      category: 'Cloud & DevOps',
      items: 'AWS (EC2, S3, Lambda, API Gateway), Docker, Rancher, Terraform, CI Pipeline'
    },
    {
      category: 'Metodologias',
      items: 'Scrum, UML, SOA, BPM, Requisitos, Business Canvas'
    }
  ]

  return (
    <section id="sobre" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-header">
              <h2 className="section-title">Sobre a Fonte Code</h2>
              <div className="ceo-badge">
                <span className="ceo-label">CEO</span>
                <span className="ceo-name">Almir Fontenele</span>
              </div>
            </div>
            <div className="profile-section">
              <h3 className="profile-title">Perfil Profissional</h3>
              <p className="profile-text">
                Desenvolvedor apaixonado por tecnologia, com mais de <strong>10 anos de experiência</strong> em
                desenvolvimento backend, focado em Java e NoSQL. Atualmente na Midway, contribuo para
                soluções inovadoras, aplicando práticas avançadas de arquitetura de software para
                impulsionar a transformação digital e a tomada de decisões baseadas em dados.
              </p>
              <p className="profile-text">
                Motivado por desafios, busco entregar projetos que combinem eficiência, inovação e impacto
                estratégico, colaborando com equipes multifuncionais para alcançar resultados de alto
                desempenho.
              </p>
            </div>
            <div className="competencies-section">
              <h3 className="competencies-title">Competências Técnicas</h3>
              <div className="competencies-list">
                {competencies.map((comp, index) => (
                  <div key={index} className="competency-item">
                    <strong className="competency-category">{comp.category}:</strong>
                    <span className="competency-items">{comp.items}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="tech-showcase">
            <h3 className="tech-title">Tecnologias Principais</h3>
            <div className="tech-grid">
              {technologies.map((tech, index) => (
                <div key={index} className="tech-item">
                  <div className="tech-icon">{tech.icon}</div>
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

