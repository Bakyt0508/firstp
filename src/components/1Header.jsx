import logo from '../img/logo.svg'
import bag from '../img/basket.svg'
import '../css/header.css'

function Header() {
    return (
        <>
            <header>
                <div className="header_container">
                    <div className="header_main">
                        <div className="logo_header">
                            <img src={logo} alt="" />
                        </div>
                        <div className="btn">
                            <button>Boйти</button>
                            <img src={bag} alt="" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;