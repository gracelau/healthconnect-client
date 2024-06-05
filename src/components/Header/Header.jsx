import { Link } from "react-router-dom";
import '../Header/Header.scss';


function Header () {

    return (
        <header className="header">
        <div className="header__wrapper">
        <Link to="/" className="header__logo"> <img className="header__logo-img" src="" alt="logo" /></Link>
          <div className="header__searchbar-wrapper">
            <div className="header__searchbar">
              <input className="header__searchbar-input" placeholder="Search" />
              <img className="header__searchbar-input-icon" src="" alt="Search icon" />
            </div>
            <div className="header__avatar"><img className="header__avatar-img" src="" alt="my avatar" />
            </div>
          </div>
          <Link to="/upload" className="header__link"> <button className="header__upload-btn"><img className="header__upload-btn-icon" src="" alt="upload icon" />Upload</button></Link>
          <div className="header__avatar-tablet"><img className="header__avatar-img-tablet" src="" alt="my avatar" />
            </div>
        </div>
        {/* end header wrapper div */}
      </header>
    )
}
export default Header;