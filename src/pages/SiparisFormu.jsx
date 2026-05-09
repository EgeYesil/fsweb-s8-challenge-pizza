import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const malzemeListesi = [
  'Pepperoni', 'Sosis', 'Kanada Jambonu', 'Tavuk Izgara', 'Soğan',
  'Domates', 'Mısır', 'Jalepeno', 'Sarımsak',
  'Biber', 'Sucuk', 'Ananas', 'Kabak'
]



function SiparisFormu() {
  const [isim, setIsim] = useState('')
  const [boyut, setBoyut] = useState('')
  const [hamur, setHamur] = useState('')
  const [malzemeler, setMalzemeler] = useState([])
  const [notlar, setNotlar] = useState('')
  const [adet, setAdet] = useState(1)
  const navigate = useNavigate()

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
     navigate('/onay')
    })
    .catch((err) => {
     console.log('Hata:', err)
    })
  }

  return ( 
    <div>
        {/* Başlık */}
        <header>
        <h1>Teknolojik Yemekler</h1>
        </header>

        <form onSubmit={handleSubmit}>
        {/* İsim */}
        <div>
            <label htmlFor="isim">İsim</label>
            <input
            id="isim"
            type="text"
            value={isim}
            onChange={(e) => setIsim(e.target.value)}
            placeholder="Adınızı giriniz"
            />
        </div>

        {/* Boyut */}
        <div>
            <label>Boyut Seç</label>
            {['Küçük', 'Orta', 'Büyük'].map((b) => (
            <label key={b}>
                <input
                type="radio"
                name="boyut"
                value={b}
                checked={boyut === b}
                onChange={(e) => setBoyut(e.target.value)}
                />
                {b}
            </label>
            ))}
        </div>

        {/* Hamur */}
        <div>
        <label htmlFor="hamur">Hamur Seç</label>
        <select
            id="hamur"
            value={hamur}
            onChange={(e) => setHamur(e.target.value)}
        >
            <option value="">Hamur Kalınlığı</option>
            <option value="ince">İnce</option>
            <option value="normal">Normal</option>
            <option value="kalin">Kalın</option>
        </select>
        </div>

        {/* Malzemeler */}
        <div>
        <label>Ek Malzemeler</label>
        {malzemeListesi.map((malzeme) => (
            <label key={malzeme}>
            <input
                type="checkbox"
                value={malzeme}
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

        {/* Notlar */}
        <div>
            <label htmlFor="notlar">Sipariş Notu</label>
            <textarea
            id="notlar"
            value={notlar}
            onChange={(e) => setNotlar(e.target.value)}
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            />
        </div>

        <button type="submit" disabled={!formGecerli}>
         SİPARİŞ VER
        </button>
        </form>
    </div>)
}

export default SiparisFormu