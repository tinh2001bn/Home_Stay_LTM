import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({click }) => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>logo</h2>
      </div>
      <div className="form_search">
          <form className="input_search">
            
            <input 
            className="form_control_search"
            type="search"
            placeholder="Search"
            >
            </input>
           <button type="submit" className="button_search">
           <i class="fa-solid fa-magnifying-glass"></i>
           </button>
            
          </form>
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="cartlogo__badge"></span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
  <div class="dropdown">
      <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown link
   </a>

     <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
      <div className="hamburger__menu" >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;