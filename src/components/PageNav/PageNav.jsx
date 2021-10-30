import './PageNav.css';
import brainflixlogo from '../../assets/Image/Logo/BrainFlix-logo.svg';
import mohanMuruge from '../../assets/Image/Images/mohanMuruge.jpg';

function PageNav() {
    return (
        <>
        <nav className= "nav">
            <div className="nav__header">
                <img src={brainflixlogo} alt="Brainflix logo" />
            </div>
            <form action="">
                <input type="search" name ="search-bar" placeholder="search"/>
                <img className="avatar" src={mohanMuruge} alt="Mohan Muruge" />
            </form>
            <button className= "nav__header--button">Upload</button>
        </nav>
    </>
    )
}

export default PageNav; 