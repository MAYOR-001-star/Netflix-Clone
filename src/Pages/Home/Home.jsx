import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_image from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_image from '../../assets/play_icon.png'
import info_image from '../../assets/info_icon.png'

const Home = () => {
    return (
        <div className='home'>
            <Navbar/>
            <div className='hero'>
                <img src={hero_image} alt='hero-banner'/>
                <div className='hero-caption'>
                    <img src={hero_title} alt='banner-img'/>
                    <p>
                        Discovering his ties to a secret ancient order, a youn man living in modern Istanbul embarks on a quest to save city from an immortal enemy.
                    </p>
                    <div className='hero-btns'>
                        <button className='btn'>
                            <img src={play_image} alt="play-button"/>Play
                        </button>
                        <button className='btn dark-btn'>
                            <img src={info_image} alt="more-info-button"/>More Info
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
