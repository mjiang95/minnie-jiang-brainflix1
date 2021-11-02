import "./PageNav.scss";
import brainflixlogo from "../../assets/Image/Logo/BrainFlix-logo.svg";
import mohanMuruge from "../../assets/Image/Images/mohanMuruge.jpg";
import search from "../../assets/Image/Icons/search.svg";
import upload from "../../assets/Image/Icons/upload.svg";
import { NavLink } from "react-router-dom";

function PageNav() {
  return (
    <nav className="nav">
      <div className="nav__header">
        <img className="brainflix-logo" src={brainflixlogo} alt="Brainflix logo"/>
      </div>
      <div className="function-header">
        <form className="search" action="">
          <img className="search-icon" src={search} alt="search-icon" />
          <input className="search-bar" type="search" name="search-bar" placeholder="search"/>
          <img className="avatar1" src={mohanMuruge} alt="Mohan Muruge" />
        </form>
        <div className="nav__button">
          <img className="upload-image" src={upload} alt="upload-image" />
        <div>
          <button className="nav__button--click">
          <NavLink to="/upload"
          >UPLOAD</NavLink></button>
        </div>
        </div>
        <img className="avatar2" src={mohanMuruge} alt="Mohan Muruge" />
      </div>
    </nav>
  );
}

export default PageNav;
