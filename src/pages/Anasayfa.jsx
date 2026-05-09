import { useNavigate } from 'react-router-dom'
import './Anasayfa.css'
import logo from '../assets/logo.svg'
import banner from '../../images/iteration-1-images/home-banner.png'
import kart1 from '../../images/iteration-2-images/cta/kart-1.png'
import kart2 from '../../images/iteration-2-images/cta/kart-2.png'
import kart3 from '../../images/iteration-2-images/cta/kart-3.png'
import food1 from '../../images/iteration-2-images/pictures/food-1.png'
import food2 from '../../images/iteration-2-images/pictures/food-2.png'
import food3 from '../../images/iteration-2-images/pictures/food-3.png'
import footerLogo from '../../images/iteration-2-images/footer/logo-footer.svg'
import icon1 from '../../images/iteration-2-images/footer/icons/icon-1.png'
import icon2 from '../../images/iteration-2-images/footer/icons/icon-2.png'
import icon3 from '../../images/iteration-2-images/footer/icons/icon-3.png'

function Anasayfa() {
  const navigate = useNavigate()

  return (
    <div>
      <header className="hero">
        <div className="hero-content">
          <img src={logo} alt="Teknolojik Yemekler" className="hero-logo" />
          <div className="hero-text">
            <p className="hero-subtitle">fırsatı kaçırma</p>
            <h1 className="hero-title">KOD ACIKTIRIR <br /> PIZZA, DOYURUR</h1>
            <button className="hero-button" onClick={() => navigate('/siparis')}>
              ACIKTIM
            </button>
          </div>
        </div>
      </header>
      <nav className="category-bar">
        <ul className="category-list">
          {[
            { icon: '../../images/iteration-2-images/icons/1.svg', label: 'YENİ! Kore' },
            { icon: '../../images/iteration-2-images/icons/2.svg', label: 'Pizza' },
            { icon: '../../images/iteration-2-images/icons/3.svg', label: 'Burger' },
            { icon: '../../images/iteration-2-images/icons/4.svg', label: 'Kızartmalar' },
            { icon: '../../images/iteration-2-images/icons/5.svg', label: 'Fast food' },
            { icon: '../../images/iteration-2-images/icons/6.svg', label: 'Gazlı içecek' },
          ].map((item) => (
            <li key={item.label} className="category-item">
              <img src={item.icon} alt={item.label} />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>
      <section className="campaigns section-container">
        <div className="campaign-left">
          <div className="campaign-text">
            <p className="campaign-left-title">Özel <br /> Lezzetus</p>
            <p className="campaign-left-desc">Position:Absolute Acı Burger</p>
            <button className="campaign-button" onClick={() => navigate('/siparis')} >SİPARİŞ VER</button>
          </div>
        </div>

        <div className="campaign-right">
          <div className="campaign-top">
            <div className="campaign-toptext">
              <p className="campaign-top-title">Hackathon Burger Menü</p>
              <button className="campaign-button" onClick={() => navigate('/siparis')}>SİPARİŞ VER</button>
            </div>
            <img src={kart2} className="top-logo" alt="Hackathon menü" />
          </div>
          <div className="campaign-bottom">
            <h2 className="campaign-btmtitle"><span>Çoooook</span> hızlı <br /> npm gibi kurye</h2>
            <button className="campaign-button" onClick={() => navigate('/siparis')}>SİPARİŞ VER</button>
          </div>
        </div>
      </section>
      <section className="popular-section section-container">
        <p className="popular-subtitle">en çok paketlenen menüler</p>
        <h2 className="popular-title">Acıktıran Kodlara Doyuran Lezzetler</h2>

        <ul className="popular-categories">
          {['Ramen', 'Pizza', 'Burger', 'French fries', 'Fast food', 'Soft drinks'].map((cat, i) => (
            <li key={cat} className={`popular-category category-item ${cat === 'Pizza' ? 'active' : ''}`}>
              <img src={`../../images/iteration-2-images/icons/${i + 1}.svg`} alt={cat} />
              <span>{cat}</span>
            </li>
          ))}
        </ul>

        <div className="popular-cards">
          {[
            { img: food1, title: 'Terminal Pizza', rating: '4.9', reviews: '(200)', price: '60₺' },
            { img: food2, title: 'Position Absolute Acı Pizza', rating: '4.9', reviews: '(928)', price: '85₺' },
            { img: food3, title: 'useEffect Tavuklu Burger', rating: '4.9', reviews: '(462)', price: '75₺' },
          ].map((item) => (
            <article key={item.title} className="popular-card">
              <img src={item.img} alt={item.title} />
              <h3 className="popular-card-title">{item.title}</h3>
              <div className="popular-card-meta">
                <span>{item.rating}</span>
                <span>{item.reviews}</span>
              </div>
              <p className="popular-card-price">{item.price}</p>
            </article>
          ))}
        </div>
      </section>
      <footer className="site-footer">
        <div className="footer-content section-container">
          <div className="footer-brand">
            <img src={footerLogo} alt="Teknolojik Yemekler" className="footer-logo" />
            <ul className="footer-contact-list">
              <li><img src={icon1} alt="" /><span>341 Londonderry Road, Istanbul Türkiye</span></li>
              <li><img src={icon2} alt="" /><span>aciktim@teknolojikyemekler.com</span></li>
              <li><img src={icon3} alt="" /><span>+90 216 123 45 67</span></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Sıcacık Menüler</h3>
            <ul>
              {['Terminal Pizza', '5 Kişilik Hackathlon Pizza', 'useEffect Tavuklu Pizza', 
                'Beyaz Console Frosty', 'Testler Geçti Mutlu Burger', 'Position Absolute Acı Burger']
                .map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <div className="footer-instagram">
            <h3>Instagram</h3>
            <div className="footer-insta-grid">
              {[0,1,2,3,4,5].map(i => (
                <img 
                  key={i}
                  src={`../../images/iteration-2-images/footer/insta/li-${i}.png`} 
                  alt={`Instagram ${i}`} 
                />
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content section-container">
            <span>© 2026 Teknolojik Yemekler.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Anasayfa