import imgMain from '../images/image-hero-desktop.png';

export const ContentMainPage = () => {
    return (
        <div className="main-page-hero">
            <div className="main-page-hero-children">
                <h1 className="main-page-h1">Make <br />remote work</h1>
                
                <div className="main-page-text">
                    <span>
                        Get your team in sync, no matter your location. 
                        <br /> Streamline processes, create team rituals, 
                        <br /> and watch productivity soar.
                    </span>
                </div>
                
                <div>
                    <button className="main-page-btn-learn-more">Learn more</button>  
                </div>

            </div>            

            <img className="main-page-img" src={imgMain} alt="hero-desktop" />
        </div>
    )
}
