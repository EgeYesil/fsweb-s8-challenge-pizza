import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './SiparisFormu.css'
import logo from '../assets/logo.svg'
import formBanner from '../../images/iteration-2-images/pictures/form-banner.png'
import Footer from '../components/Footer'

const malzemeListesi = [
  'Pepperoni', 'Sosis', 'Kanada Jambonu', 'Tavuk Izgara', 'Soğan',
  'Domates', 'Mısır', 'Jalepeno', 'Sarımsak',
  'Biber', 'Sucuk', 'Ananas', 'Kabak'
]



function SiparisFormu({ setSiparis }) {
  const [isim, setIsim] = useState('')
  const [boyut, setBoyut] = useState('')
  const [hamur, setHamur] = useState('')
  const [malzemeler, setMalzemeler] = useState([])
  const [notlar, setNotlar] = useState('')
  const [adet, setAdet] = useState(1)
  const navigate = useNavigate()
  const [hata, setHata] = useState('')

  const formGecerli = 
  isim.length >= 3 &&
  boyut !== '' &&
  malzemeler.length >= 4 &&
  malzemeler.length <= 10

  const handleSubmit = (e) => {
    e.preventDefault()

    const siparis = {
         isim,
         boyut,
         hamur,
         malzemeler,
         notlar,
         adet
        }

    axios.post('https://reqres.in/api/pizza', siparis, {
     headers: { 'x-api-key': import.meta.env.VITE_API_KEY }
    })
    .then((res) => {
     console.log('Sipariş alındı:', res.data)
     setSiparis({
        isim,
        boyut,
        hamur,
        malzemeler,
        notlar,
        adet
     })
     navigate('/onay')
    })
    .catch((err) => {
     console.log('Hata:', err)
     setHata('Bir hata oluştu, lütfen tekrar deneyin.')
    })
  }

return ( 
  <div className="siparis-sayfasi">
    <header className="header">
      <img src={logo} alt="Teknolojik Yemekler" />
    </header>

    <div className="pizza-bilgi-wrapper">
      <div className="form-icerik">
        <div className="form-banner">
          <img src={formBanner} alt="Pizza" />
        </div>
        <div className="breadcrumb">
          <span>Anasayfa</span>
          <span> - </span>
          <span>Seçenekler</span>
          <span> - </span>
          <span className="breadcrumb-aktif">Sipariş Oluştur</span>
        </div>
        <div className="pizza-bilgi">
          <h2>Position Absolute Acı Pizza</h2>
          <div className="pizza-fiyat-satir">
            <span className="pizza-fiyat">85.50₺</span>
            <span className="pizza-puan">4.9</span>
            <span className="pizza-yorum">(200)</span>
          </div>
          <p className="pizza-aciklama">Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.</p>
        </div>
      </div>
    </div>

    <div className="form-icerik">
      <form className="siparis-formu" onSubmit={handleSubmit}>
        {/* Boyut ve Hamur */}
        <div className="boyut-hamur-satir">
          <div className="form-grup">
            <label>Boyut Seç <span className="zorunlu">*</span></label>
            <div className="boyut-grup">
              {[{label: 'S', value: 'Küçük'}, {label: 'M', value: 'Orta'}, {label: 'L', value: 'Büyük'}].map((b) => (
                <button key={b.value} type="button"
                  className={`boyut-btn ${boyut === b.value ? 'aktif' : ''}`}
                  onClick={() => setBoyut(b.value)}>
                  {b.label}
                </button>
              ))}
            </div>
          </div>
          <div className="form-grup">
            <label htmlFor="hamur">Hamur Seç</label>
            <select id="hamur" value={hamur} onChange={(e) => setHamur(e.target.value)}>
              <option value="">Hamur Kalınlığı</option>
              <option value="ince">İnce</option>
              <option value="normal">Normal</option>
              <option value="kalin">Kalın</option>
            </select>
          </div>
        </div>

        {/* Malzemeler */}
        <div className="form-grup">
          <label>Ek Malzemeler</label>
          <div className="malzeme-grid">
            {malzemeListesi.map((malzeme) => (
              <label key={malzeme}>
                <input type="checkbox" value={malzeme}
                  checked={malzemeler.includes(malzeme)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setMalzemeler([...malzemeler, malzeme])
                    } else {
                      setMalzemeler(malzemeler.filter((m) => m !== malzeme))
                    }
                  }}
                />
                {malzeme}
              </label>
            ))}
          </div>
        </div>

        {/* İsim */}
        <div className="form-grup">
          <label htmlFor="isim">İsim</label>
          <input id="isim" type="text" value={isim}
            onChange={(e) => setIsim(e.target.value)}
            placeholder="Adınızı giriniz" />
        </div>

        {/* Notlar */}
        <div className="form-grup">
          <label htmlFor="notlar">Sipariş Notu</label>
          <textarea id="notlar" value={notlar}
            onChange={(e) => setNotlar(e.target.value)}
            placeholder="Siparişine eklemek istediğin bir not var mı?" />
        </div>

        <div className="adet-toplam-satir">
          <div className="adet-secici">
            <button type="button" onClick={() => setAdet(adet > 1 ? adet - 1 : 1)}>-</button>
            <span>{adet}</span>
            <button type="button" onClick={() => setAdet(adet + 1)}>+</button>
          </div>
          <div className="toplam-kutu">
            <h3>Sipariş Toplamı</h3>
            <div className="toplam-satir">
              <span>Seçimler</span>
              <span>{malzemeler.length * 5} ₺</span>
            </div>
            <div className="toplam-satir toplam">
              <span>Toplam</span>
              <span>{85 + malzemeler.length * 5} ₺</span>
            </div>
          </div>
        </div>

        {hata && <p className="hata-mesaji">{hata}</p>}
        <button type="submit" disabled={!formGecerli}>SİPARİŞ VER</button>
      </form>

    </div>
    <Footer />        
  </div>
  
)
}

export default SiparisFormu