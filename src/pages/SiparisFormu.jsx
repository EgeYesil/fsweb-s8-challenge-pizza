import { useState } from 'react'

function SiparisFormu() {
  const [isim, setIsim] = useState('')
  const [boyut, setBoyut] = useState('')
  const [hamur, setHamur] = useState('')
  const [malzemeler, setMalzemeler] = useState([])
  const [notlar, setNotlar] = useState('')
  const [adet, setAdet] = useState(1)

  return <div>Siparis Formu</div>
}

export default SiparisFormu