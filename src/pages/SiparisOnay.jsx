import { useNavigate } from 'react-router-dom'
import './SiparisOnay.css'
import logo from '../assets/logo.svg'
import Footer from '../components/Footer'

function SiparisOnay({ siparis }) {
  const navigate = useNavigate()

  return (
    <div className="onay-wrapper">
    <div className="onay-sayfasi">
      <header>
        <img src={logo} alt="Teknolojik Yemekler" />
      </header>
      <main>
        <p className="lezzet-yazi">lezzetin yolda</p>
        <h1>SİPARİŞ ALINDI</h1>
        <hr />
        <div className="siparis-detay">
          <p className="pizza-isim">Position Absolute Acı Pizza</p>
          <p>Boyut: <strong>{siparis?.boyut}</strong></p>
          <p>Hamur: <strong>{siparis?.hamur}</strong></p>
          <p>Malzemeler: <strong>{siparis?.malzemeler?.join(', ')}</strong></p>
        </div>
        <div className="toplam-kutu">
          <h3>Sipariş Toplamı</h3>
          <div className="toplam-satir">
            <span>Seçimler</span>
            <span>{siparis?.malzemeler?.length * 5} ₺</span>
          </div>
          <div className="toplam-satir toplam">
            <span>Toplam</span>
            <span>{85 + (siparis?.malzemeler?.length * 5)} ₺</span>
          </div>
          
        </div>
        
      </main>
      </div>
      <Footer />
    </div>
  )
}

export default SiparisOnay