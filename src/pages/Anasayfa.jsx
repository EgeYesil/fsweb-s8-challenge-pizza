import { useNavigate } from 'react-router-dom'
import './Anasayfa.css'
import logo from '../assets/logo.svg'
import banner from '../../images/iteration-1-images/home-banner.png'

function Anasayfa() {
  const navigate = useNavigate()

  return (
    <div>
      <header className="hero">
        <div className="hero-content">
          <img src={logo} alt="Teknolojik Yemekler" className="hero-logo" />
          <div className="hero-text">
            <p className="hero-subtitle">fırsatı kaçırma</p>
            <h1 className="hero-title">KOD ACIKTIRIR <br /> PIZZA, DOYURUR</h1>
            <button className="hero-button" onClick={() => navigate('/siparis')}>
              ACIKTIM
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Anasayfa