import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
 
  return (

  <footer id="footer-desktop">
      <div className="footer">
      <a href="#products-home">
        <div className="footer-logo">
      
          <img
           // src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Funko.svg/1200px-Funko.svg.png"
           src="../funko-logo-black.png" 
           alt="Funko Logo"
            height="50px"
          />
      
        </div>    </a>
        <div className="footer-SocialNetworks">
          <a href="#">
            <TwitterIcon fontSize="large" style={{ color: 'black' }} />
          </a>
          <a href="#">
            <InstagramIcon fontSize="large" style={{ color: 'black' }}/>
          </a>
          <a href="#">
            <FacebookIcon fontSize="large" style={{ color: 'black' }}/>
          </a>
          <a href="#">
            <WhatsAppIcon fontSize="large" style={{ color: 'black' }}/>
          </a>
        </div>
      </div>
    </footer>
  ) 
};

export default Footer;