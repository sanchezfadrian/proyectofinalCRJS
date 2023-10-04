import logo from "../../img/logo.svg";
import { Link } from "react-router-dom";

const Brand = () => {

    return(
        <div>
            <Link to="/">
                <img width="170" src={logo}></img>
            </Link>
        </div>
    );
}

export default Brand;