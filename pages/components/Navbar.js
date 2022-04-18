import Link from "next/link";
import { FaFacebookSquare,FaTwitterSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
const Navbar = () => {
    return(
        
        <nav className="nav">
        <div className="nav-menu-flex-row">
        <div className="header-title"><h1>Tour & Travel Blog</h1></div>
        <div className="nav-brand">
        <link href='#' className="text-gray"></link>
        
            <div className="toggle-collapse">
            <div className="toggle-icons">
            <i className="bars"></i>
            </div>
            </div>
            <ul className="nav-items">
                <li className="nav-link">
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>  
                <li className="nav-link">      
                    <Link href="/About">
                    <a>About</a>
                    </Link>
                </li>  
                <li className="nav-link">
                    <Link href="/Contact">
                     <a>Category</a>
                    </Link>
                </li>
                <li className="nav-link">
                    <Link href="/Blog">
                    <a>Blog</a>
                    </Link>
                </li>
                <li className="nav-link">
                    <Link href="/Product">
                    <a>Contact Us</a>
                    </Link>
                </li>   
            </ul>
        </div>
        <div className="social-text-gray">
        <a href='#'> <FaFacebookSquare/>&nbsp;&nbsp;&nbsp;</a>
        <a href='#'><AiFillInstagram/>&nbsp;&nbsp;&nbsp;</a>
        <a href='#'><FaTwitterSquare/>&nbsp;&nbsp;&nbsp;</a>
        </div>
        </div>
      </nav>
      
      
   
    );
}
export default Navbar;