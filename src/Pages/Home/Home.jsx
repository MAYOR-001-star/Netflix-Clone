import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_image from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_image from "../../assets/play_icon.png";
import info_image from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <div className="hero">
                <img src={hero_image} className="banner-img" alt="Hero banner" />
                <div className="hero-caption">
                    <img src={hero_title} className="caption-img" alt="Hero title" />
                    <p>
                        Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.
                    </p>
                    <div className="hero-btns">
                        <button className="btn">
                            <img src={play_image} alt="Play button" /> Play
                        </button>
                        <button className="btn dark-btn">
                            <img src={info_image} alt="More info button" /> More Info
                        </button>
                    </div>
                    <TitleCards />
                </div>
            </div>
            <div className="more-cards">
                <TitleCards title={"Upcoming"}/>
                <TitleCards title={"Only on Netflix"}/>
                <TitleCards title={"Blockbuster Movies"}/>
                <TitleCards title={"Top Picks for You"}/>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
