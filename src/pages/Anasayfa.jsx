import { useNavigate } from 'react-router-dom'
import './Anasayfa.css'
import logo from '../assets/logo.svg'
import banner from '../../images/iteration-1-images/home-banner.png'

function Anasayfa() {
  const navigate = useNavigate()

  return (
    <div className="anasayfa">
    <header>
        <img src={logo} alt="Teknolojik Yemekler" />
    </header>
    <main>
        <h1>KOD ACIKTIR<br />PİZZA, DOYURUR</h1>
        <button className="aciktim-btn" onClick={() => navigate('/siparis')}>
        ACIKTIM
        </button>
    </main>
    </div>
  )
}

export default Anasayfa