import { GrLocation } from "react-icons/gr";
import Image from "next/image"
const Header = () => {
    return (
        <header>
        <section className="site-title">
        <div className="site-background">
        <Image src="/background.png" width="1490px" height="900px" alt="img"></Image>
        <h3>Tours & Travels</h3>
        <h1><GrLocation/>Visit Amazing Places on Uttarakhand</h1>
        <button className="button">Explore</button>
        </div>
        </section>
        </header>

    );
}
export default Header;