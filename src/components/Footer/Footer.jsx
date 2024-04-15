import './footer.css';
import telegram from '../../images/tlg.png';
import github from '../../images/github.png';

function Footer() {

  return (
    <footer className="footer">
      <ul className="footer-wrap">
        <li className="footer__link">
          <a 
            href="https://github.com/krokodila888" 
            className="footer__link-text" 
            target="_blank">
            <img 
              className="footer__social-icon" 
              src={github}/>
              Мой Гитхаб
          </a>
        </li>
        <li className="footer__link">
          <a 
            href='https://t.me/e_kurakina888' 
            className="footer__link-text" 
            target="_blank">
            <img 
              className="footer__social-icon" 
              src={telegram}/>
            (пишите об ошибках)
          </a>
        </li>
      </ul>
    </footer>
  );
}
  
export default Footer;