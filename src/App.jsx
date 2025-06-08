"use client"

import { useState, useEffect } from "react"
import { GiDeliveryDrone } from "react-icons/gi";
import { PiTruckTrailerFill } from "react-icons/pi";
import { FaSatellite } from "react-icons/fa";


import "./App.css"

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }))
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll("[id]")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Formulário enviado com sucesso! Entraremos em contato em breve.")
  }

  return (
    <div className="App">
      {/* Header */}
    
      <header className="header">
        <div className="container">
          <div className="logo">
            <span className="logo-icon">🚛</span>
            <span className="logo-text">LogiBrasil</span>
          </div>

          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#areas">Áreas Atendidas</a>
            <a href="#contato">Contato</a>
          </nav>

          <button className="cta-button">Solicitar Cotação</button>

          <button className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <div className="container">
            <h1 className={`hero-title ${isVisible.inicio ? "animate-in" : ""}`}>
              Conectando o Brasil com <span className="highlight">agilidade</span> e{" "}
              <span className="highlight">segurança</span>
            </h1>
            <p className={`hero-subtitle ${isVisible.inicio ? "animate-in delay-1" : ""}`}>
              Soluções completas em transporte rodoviário para todo o território nacional
            </p>
            <button className={`hero-cta ${isVisible.inicio ? "animate-in delay-2" : ""}`}>Solicitar Cotação</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="services">
        <div className="container">
          <h2 className={`section-title ${isVisible.servicos ? "animate-in" : ""}`}>Nossos Serviços</h2>

          <div className="services-grid">
            <div className={`service-card ${isVisible.servicos ? "animate-in" : ""}`}>
              <div className="service-icon">🚚</div>
              <h3>Transporte Rodoviário</h3>
              <p>Frota moderna e diversificada para atender todas as suas necessidades de transporte</p>
            </div>

            <div className={`service-card ${isVisible.servicos ? "animate-in delay-1" : ""}`}>
              <div className="service-icon"><FaSatellite /></div>
              <h3>Rastreamento em Tempo Real</h3>
              <p>Acompanhe sua carga 24/7 com nossa tecnologia de rastreamento avançada</p>
            </div>

            <div className={`service-card ${isVisible.servicos ? "animate-in delay-1" : ""}`}>
              <div className="service-icon"><GiDeliveryDrone /></div>
              <h3>Smart Delivery</h3>
              <p>Perfeito para intralogistica, condomínios e médias distâncias</p>
            </div>

            <div className={`service-card ${isVisible.servicos ? "animate-in delay-2" : ""}`}>
              <div className="service-icon"><PiTruckTrailerFill /></div>
              <h3>Frota Própria</h3>
              <p>Veículos próprios garantem maior controle de qualidade e pontualidade</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="about">
        <div className="container">
          <div className="about-content">
            <div className={`about-text ${isVisible.sobre ? "animate-in" : ""}`}>
              <h2>Sobre a LogiBrasil</h2>
              <p>
                Com mais de 15 anos de experiência no mercado de transporte rodoviário, a TransBrasil se consolidou como
                uma das principais empresas do setor no Brasil.
              </p>
              <p>
                Nossa missão é conectar pessoas e empresas por todo o território nacional, oferecendo soluções
                logísticas eficientes, seguras e sustentáveis.
              </p>
              <div className="stats">
                <div className="stat">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Anos de Experiência</span>
                </div>
                <div className="stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Cidades Atendidas</span>
                </div>
                <div className="stat">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Satisfação dos Clientes</span>
                </div>
              </div>
            </div>
            <div className={`about-image ${isVisible.sobre ? "animate-in delay-1" : ""}`}>
              <img src="/about.svg?height=400&width=600" alt="Frota TransBrasil" />
            </div>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section id="areas" className="areas">
        <div className="container">
          <h2 className={`section-title ${isVisible.areas ? "animate-in" : ""}`}>Áreas Atendidas</h2>
          <div className="areas-grid">
            <div className={`area-card ${isVisible.areas ? "animate-in" : ""}`}>
              <h3>Região Sudeste</h3>
              <p>São Paulo, Rio de Janeiro, Minas Gerais, Espírito Santo</p>
            </div>
            <div className={`area-card ${isVisible.areas ? "animate-in delay-1" : ""}`}>
              <h3>Região Sul</h3>
              <p>Rio Grande do Sul, Santa Catarina, Paraná</p>
            </div>
            <div className={`area-card ${isVisible.areas ? "animate-in delay-2" : ""}`}>
              <h3>Região Centro-Oeste</h3>
              <p>Mato Grosso, Mato Grosso do Sul, Goiás, Distrito Federal</p>
            </div>
            <div className={`area-card ${isVisible.areas ? "animate-in delay-3" : ""}`}>
              <h3>Região Nordeste</h3>
              <p>Bahia, Pernambuco, Ceará e demais estados</p>
            </div>
            <div className={`area-card ${isVisible.areas ? "animate-in delay-3" : ""}`}>
              <h3>Paraguai</h3>
              <p>De Assuncion a Ciudad del Este</p>
            </div>
            <div className={`area-card ${isVisible.areas ? "animate-in delay-3" : ""}`}>
              <h3>Argentina e Uruguai</h3>
              <p>Buenos Aires, Montivideo, e mais.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">O que nossos clientes dizem</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>"Excelente serviço! Sempre pontuais e carga sempre chega em perfeito estado."</p>
              <div className="testimonial-author">
                <strong>Maria Rosalinda</strong>
                <span>Gerente de Logística - Empresa ABC</span>
              </div>
            </div>
            <div className="testimonial-card">
              <p>"O rastreamento em tempo real nos dá total tranquilidade. Recomendo!"</p>
              <div className="testimonial-author">
                <strong>Reseilton da Silva</strong>
                <span>Diretor Comercial - Indústria XYZ</span>
              </div>
            </div>
            <div className="testimonial-card">
              <p>"Parceria de anos. Confiança total na TransBrasil para nossas entregas."</p>
              <div className="testimonial-author">
                <strong>Pedro Alvares Resenho</strong>
                <span>CEO - Distribuidora 123</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="contact">
        <div className="container">
          <h2 className={`section-title ${isVisible.contato ? "animate-in" : ""}`}>Entre em Contato</h2>

          <div className="contact-content">
            <div className={`contact-info ${isVisible.contato ? "animate-in" : ""}`}>
              <h3>Fale Conosco</h3>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>(11) 3456-7890</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>contato@transbrasil.com.br</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Av. Paulista, 1000 - São Paulo, SP</span>
              </div>
            </div>

            <form className={`contact-form ${isVisible.contato ? "animate-in delay-1" : ""}`} onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" placeholder="Seu nome" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Seu e-mail" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Seu telefone" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Sua mensagem" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-button">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="logo">
                <span className="logo-icon">🚛</span>
                <span className="logo-text">LogiBrasil</span>
              </div>
              <p>Conectando o Brasil com agilidade e segurança.</p>
            </div>

            <div className="footer-section">
              <h4>Links Rápidos</h4>
              <ul>
                <li>
                  <a href="#inicio">Início</a>
                </li>
                <li>
                  <a href="#sobre">Sobre</a>
                </li>
                <li>
                  <a href="#servicos">Serviços</a>
                </li>
                <li>
                  <a href="#contato">Contato</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contato</h4>
              <p>📞 (11) 3456-7890</p>
              <p>📧 contato@transbrasil.com.br</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 LogiBrasil. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

         <a
  href="https://wa.me/5511919223489"
  className="whatsapp-float"
  target="_blank"
  rel="noopener noreferrer"
>
  🟡 Atendimento
</a>
    

    </div>
  )
}

export default App
