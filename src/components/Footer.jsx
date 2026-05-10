import footerLogo from '../../images/iteration-2-images/footer/logo-footer.svg'
import icon1 from '../../images/iteration-2-images/footer/icons/icon-1.png'
import icon2 from '../../images/iteration-2-images/footer/icons/icon-2.png'
import icon3 from '../../images/iteration-2-images/footer/icons/icon-3.png'

function Footer() {
  return (
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
              <img key={i}
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
  )
}

export default Footer