import imgMain from '../images/image-hero-desktop.png';
import imgDatabiz from '../images/client-databiz.svg';
import imgAudiophile from '../images/client-audiophile.svg';
import imgMeet from '../images/client-meet.svg';
import imgMaker from '../images/client-maker.svg';


export const ContentMainPage = () => {
    return (
        <div className="main-page-hero">
            <div className="main-page-hero-children">
                <h1 className="main-page-h1">Make <br />remote work</h1>
                
                <div className="main-page-text">
                    <span>
                        Get your team in sync, no matter your location. 
                        <br /> Streamline processes, create team rituals, and
                        <br /> watch productivity soar.
                    </span>
                </div>
                
                <div>
                    <button className="main-page-btn-learn-more">Learn more</button>  
                </div>

                <div>
                    <img className="main-page-client-logo" src={ imgDatabiz } alt="Databiz" />
                    <img className="main-page-client-logo" src={ imgAudiophile } alt="Audiophile" />
                    <img className="main-page-client-logo" src={ imgMeet } alt="Meet" />
                    <img className="main-page-client-logo" src={ imgMaker } alt="Maker" />
                </div>

            </div>            

            <img className="main-page-img" src={imgMain} alt="hero-desktop" />
        </div>
    )
}

