import { FaFacebook } from "react-icons/fa";
import { VscTwitter } from "react-icons/vsc";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoLinkedin} from "react-icons/io";
const Footer = () => {
    return(
        <div className="footer">
        <div className="container">
            <div className="row">
                <div className="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">about us</a></li>
                        <li><a href="#">our services</a></li>
                        <li><a href="#">privacy policy</a></li>
                        <li><a href="#">affiliate program</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Get help</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">order status</a></li>
                        <li><a href="#">payment options</a></li>
                        <li><a href="#">shipping</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Online Booking</h4>
                    <ul>
                        <li><a href="#">tour booking</a></li>
                        <li><a href="#">travel booking</a></li>
                        <li><a href="#">hotel booking</a></li>
                        <li><a href="#">resort booking</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Follow us</h4>
                    <div className="social-icons">
                    <a href="#"><FaFacebook/></a><br/>
                    <a href="#"><VscTwitter/></a><br/>
                    <a href="#"><RiInstagramFill/></a><br/>
                    <a href="#"><IoLogoLinkedin/></a>
                    </div>
                </div>
            </div>
        </div>
        </div>

        
    );
}
export default Footer;