import './style.css'
import {ReactComponent as InstagranIcon} from './instagram.svg';
import {ReactComponent as LinkedInIcon} from './linkedin.svg';
import {ReactComponent as YouTubeIcon} from './youtube.svg';
function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido na 2 Edição do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://youtube.com" target="_blank" rel="noreferrer"><YouTubeIcon/></a>
                <a href="https://www.linkedin.com/in/marcus-vinícius-718a14189/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
                <a href="http://instagran.com" target="_blank" rel="noreferrer"><InstagranIcon/></a>
            </div>
        </footer>
    )
}

export default Footer;