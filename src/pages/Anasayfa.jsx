import { useNavigate } from 'react-router-dom'

function Anasayfa() {
  const navigate = useNavigate()

  return (
    <div>
      <header>
        <h3>Teknolojik Yemekler</h3>
      </header>

      <main>
        <h1>KOD ACIKTIR<br />PİZZA, DOYURUR</h1>
        <button onClick={() => navigate('/siparis')}>
          ACIKTIM
        </button>
      </main>
    </div>
  )
}

export default Anasayfa