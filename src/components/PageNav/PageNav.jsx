import './PageNav.css';
import brainflixlogo from '../../assets/Image/Logo/BrainFlix-logo.svg';
import mohanMuruge from '../../assets/Image/Images/mohanMuruge.jpg';

function PageNav() {
    return (
        <>
        <nav class= "nav">
            <div class="nav__header">
                <img src={brainflixlogo} alt="Brainflix logo" />
            </div>
            <form action="">
                <input type="search" name ="search-bar" value= "search"/>
                <img class="avatar" src={mohanMuruge} alt="Image of Mohan Muruge" />
            </form>
            <button class= "nav__header--button">Upload</button>
        </nav>
    </>
    )
}

export default PageNav; 