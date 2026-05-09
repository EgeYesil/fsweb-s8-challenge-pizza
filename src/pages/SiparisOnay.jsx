import { useNavigate } from 'react-router-dom'

function SiparisOnay() {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Siparişin Alındı! 🎉</h1>
      <p>Pizzan yolda, bekle!</p>
      <button onClick={() => navigate('/')}>
        Anasayfaya Dön
      </button>
    </div>
  )
}

export default SiparisOnay