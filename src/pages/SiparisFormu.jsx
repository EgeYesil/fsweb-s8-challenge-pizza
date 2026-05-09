import { useState } from 'react'

const malzemeListesi = [
  'Pepperoni', 'Sosis', 'Kanada Jambonu', 'Tavuk Izgara', 'Soğan',
  'Domates', 'Mısır', 'Sucuk', 'Jalepeno', 'Sarımsak',
  'Biber', 'Sucuk', 'Ananas', 'Kabak'
]



function SiparisFormu() {
  const [isim, setIsim] = useState('')
  const [boyut, setBoyut] = useState('')
  const [hamur, setHamur] = useState('')
  const [malzemeler, setMalzemeler] = useState([])
  const [notlar, setNotlar] = useState('')
  const [adet, setAdet] = useState(1)
  const formGecerli = 
  isim.length >= 3 &&
  boyut !== '' &&
  malzemeler.length >= 4 &&
  malzemeler.length <= 10

  return ( 
    <div>
        {/* Başlık */}
        <header>
        <h1>Teknolojik Yemekler</h1>
        </header>

        <form>
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