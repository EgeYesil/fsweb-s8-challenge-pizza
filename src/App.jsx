import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Anasayfa from './pages/Anasayfa'
import SiparisFormu from './pages/SiparisFormu'
import SiparisOnay from './pages/SiparisOnay'

function App() {
  const [siparis, setSiparis] = useState(null)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Anasayfa />} />
        <Route path="/siparis" element={<SiparisFormu setSiparis={setSiparis}/>} />
        <Route path="/onay" element={<SiparisOnay siparis={siparis}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
