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
                        <Link to="category/motherboard" className="navbar-item">
                            Motherboard
                        </Link>
                        <Link to="category/procesadores" className="navbar-item">
                            Procesadores
                        </Link>
                        <Link to="category/memorias" className="navbar-item">
                            Memorias
                        </Link>
                        <Link to="category/placas_de_video" className="navbar-item">
                            Placas de video
                        </Link>
                        <Link to="/cart" className="navbar-item">
                            <CartWidget/>
                        </Link>
                    </div>
                </div>
            </nav>
    );
}

export default NavBar;