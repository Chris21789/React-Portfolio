import './Footer.css'
import gitLogo from '../assets/github-mark.svg'
import linkedLogo from '../assets/linkedin.svg'

function Footer() {
  return (
    <nav id='footer'>
        <a href='https://github.com/Chris21789'><img src={gitLogo} id= 'git'/></a>
        <a href='https://www.linkedin.com/in/christopher-colon-7b5942253/'><img src={linkedLogo} id= 'linked'/></a>
    </nav>
  );
}

export default Footer;