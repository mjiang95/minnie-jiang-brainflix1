import "./PageNav.scss";
import brainflixlogo from "../../assets/Image/Logo/BrainFlix-logo.svg";
import mohanMuruge from "../../assets/Image/Images/mohanMuruge.jpg";
import search from "../../assets/Image/Icons/search.svg";
import upload from "../../assets/Image/Icons/upload.svg";

function PageNav() {
  return (
    <nav className="nav">
      <div className="nav__header">
        <img className="brainflix-logo" src={brainflixlogo} alt="Brainflix logo"/>
      </div>
      
            <form className="search" action="">
                <img className="search-icon" src={search} alt="search-icon" />
                <input className="search-bar" type="search" name="search-bar" placeholder="search"/>
                <img className="avatar1" src={mohanMuruge} alt="Mohan Muruge" />
            </form>
            <div className="nav__button">
                <img className="upload-image" src={upload} alt="upload-image" />
                <button className="nav__button--click">UPLOAD</button>
            </div>
            <img className="avatar2" src={mohanMuruge} alt="Mohan Muruge" /> 
    </nav>
  );
}

export default PageNav;
