import '../css/footer.css'
import logo from '../img/logo.svg'
import strelca from '../img/strelca.svg'
import world from '../img/world.svg'
import faceboock from '../img/faceboock.svg'
import twiter from '../img/twiter.svg'
import instagram from '../img/instagram.svg'
import apple from '../img/apple.svg'
import play from '../img/play.svg'



function footer() {
  return (
    <>
      <footer>
        <div className="footer_container">
          <div className="logo_footer">
            <img src={logo} alt="" srcset="" />
          </div>
          <hr className='line' />
          <div className="footer_block">
            <div className="footer_box">
              <div className="select">
                <img className='img1' src={world} alt="" />
                <h2>English</h2>
                <img className='img2' src={strelca} alt="" />
              </div>
              <div className="uber">
                #<h1>UberEats</h1>
              </div>
              <div className="icon">
                <img src={faceboock} alt="" />
                <img src={twiter} alt="" />
                <img src={instagram} alt="" />
              </div>
            </div>
            <div className="footer_box2">
              <p>Об UberEats</p>
              <p>Станьте партнёром по доставке</p>
              <p>Станьте парнёром-рестораном</p>
            </div>
            <div className="footer_box3">
              <p>Все города</p>
              <p>Цены</p>
              <p>Помощь</p>
              <p>FAQs</p>
            </div>
          </div>
          <hr className='lines line' />
          <div className="marcet">
            <img src={apple} alt="" />
            <img src={play} alt="" />
          </div>
          <hr className='line' />
          <div className="final">
            <p>© 2017 Uber Technologies Inc.</p>
            <p>Обработка персональных данных</p>
            <p>Пользовательское соглашение</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default footer;