import imgMain from '../images/image-hero-desktop.png';

export const ContentMainPage = () => {
    return (
        <div className="main-page-hero">
            <div className="main-page-hero-children">
                <h1 className="main-page-h1">Make <br />remote work</h1>
                <span className="main-page-text">
                    Get your team in sync, no matter your location. 
                    <br /> Streamline processes, create team rituals, 
                    <br /> and watch productivity soar.
                </span>
            </div>

            <img className="main-page-img" src={imgMain} alt="hero-desktop" />
        </div>
    )
}
