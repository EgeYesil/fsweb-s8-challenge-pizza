import { useNavigate } from 'react-router-dom'
import './SiparisOnay.css'
import logo from '../assets/logo.svg'

function SiparisOnay({ siparis }) {
  const navigate = useNavigate()

  return (
    <div className="onay-sayfasi">
      <header>
        <img src={logo} alt="Teknolojik Yemekler" />
      </header>
      <main>
        <p className="lezzet-yazi">lezzetin yolda</p>
        <h1>SİPARİŞ ALINDI</h1>
        <hr />
        <div className="siparis-detay">
          <p>Boyut: <strong>{siparis?.boyut}</strong></p>
          <p>Hamur: <strong>{siparis?.hamur}</strong></p>
          <p>Malzemeler: <strong>{siparis?.malzemeler?.join(', ')}</strong></p>
        </div>
      </main>
    </div>
  )
}

export default SiparisOnay