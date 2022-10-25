import useStore from "../store/index";
import "../App.css";
import "../Styles/Header.css";
import NavBar from "./navBar/NavBar";



const ProductNavbar = () => {
  const {
    
    OpenShoppingCart,
    ProductsAddedCart,
  } = useStore();
  return (
     
    <header className="header flex__between">
    
       <img
        src="../funko-logo-white.png" 
        alt="Funko Logo"
        height="40px" />  
        
        <NavBar/>
      <div className="header__icon flex__center">
        
      <a href="#">
        <img
          className="header__iconImg"
          src="/Icon/iconCart.png"
          onClick={() => OpenShoppingCart()}
        />
        </a>
       
       
        
        <span className="header__quantity flex__center">
          {ProductsAddedCart.length}
          
        </span>
    
      </div>
    </header>
    
  );
};

export default ProductNavbar;