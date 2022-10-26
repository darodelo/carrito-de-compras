import useStore from "../store/index";
import "../App.css";
import "../Styles/Header.css";
import NavBar from "./navBar/NavBar";
import "../Styles/Navbar.css"



const ProductNavbar = () => {
  const {
    
    OpenShoppingCart,
    ProductsAddedCart,
  } = useStore();
  return (
     
    <header className="header flex__between">
    
       <img className="IconoFunkoBlanco"
        src="../funko-logo-white.png" 
        alt="Funko Logo"
         />  
        
        <NavBar/>
      <div className="header__icon flex__center">
        
      <a href="#">
        <img
          className="IconoCarrito"
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