import "../components/header.css";
import { Link } from "react-router-dom";
import Profile from "./classComponent";

export default function Header() {
    return (<div className="header">
        <ul className="header_item">
            <li> <Link to="/offer" > Offers</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/User">User</Link></li>
            <li><Link to="/Cart">Cart</Link></li>
        </ul>


    </div>
)
}