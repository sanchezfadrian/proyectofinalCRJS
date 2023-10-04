import Brand from "./Brand";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () =>{

    return(
            <nav className="navbar is-success" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Brand/>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-end">
                        <Link to="/" className="navbar-item">
                            Todos
                        </Link>
                        <Link to="category/men's clothing" className="navbar-item">
                            Ropa de hombre
                        </Link>
                        <Link to="category/jewelery" className="navbar-item">
                            Joyas
                        </Link>
                        <Link to="category/electronics" className="navbar-item">
                            Electronica
                        </Link>
                        <Link to="category/women's clothing" className="navbar-item">
                            Ropa de mujer
                        </Link>
                        <Link to="" className="navbar-item">
                            <CartWidget/>
                        </Link>
                    </div>
                </div>
            </nav>
    );
}

export default NavBar;