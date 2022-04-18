import Content from "./Content"
import Carousel from "./Carousel";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

export default function Layout() {
    return(
        <div className="layout">
            <Navbar/>
            <Header/>
            <Content/>
            <Carousel/>
            <Footer/>
        </div>
    );
}
