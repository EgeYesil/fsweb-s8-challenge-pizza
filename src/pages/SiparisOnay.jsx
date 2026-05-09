import { useNavigate } from 'react-router-dom'
import './SiparisOnay.css'
import logo from '../assets/logo.svg'

function SiparisOnay() {
  const navigate = useNavigate()

  return (
    <div className="onay-sayfasi">
      <header>
        <img src={logo} alt="Teknolojik Yemekler" />
      </header>
      <main>
        <h1>TEBRİKLER!<br />SİPARİŞİNİZ ALINDI!</h1>
        <button className="anasayfa-btn" onClick={() => navigate('/')}>
          Anasayfaya Dön
        </button>
      </main>
    </div>
  )
}

export default SiparisOnay