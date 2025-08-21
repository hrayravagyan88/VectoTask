import FeaturedTitleImage from '../assets/FeaturedTitleImage.png';
import FeaturedCoverImage from '../assets/FeaturedCoverImage.png';
import specials1 from '../assets/https_specials-1.png';
import specials2 from '../assets/https_specials-2.png';
import specials3 from '../assets/https_specials-3.png';
import specials4 from '../assets/https_specials-4.png';
import specials5 from '../assets/https_specials-5.png';
import specials6 from '../assets/https_specials-6.png';
import specials7 from '../assets/https_specials-7.png';
import specials8 from '../assets/https_specials-8.png';
const imageMap = {
  "FeaturedCoverImage.png": FeaturedCoverImage,
  "FeaturedTitleImage.png": FeaturedTitleImage,
  "https_specials-1.png": specials1,
  "https_specials-2.png": specials2,
  "https_specials-3.png": specials3,
  "https_specials-4.png": specials4,
  "https_specials-5.png": specials5,
  "https_specials-6.png": specials6,
  "https_specials-7.png": specials7,
  "https_specials-8.png": specials8,
};
const MainMenu = ({items}) => {
    const durationInHours = Math.floor(items.Duration / 3600);
    const coverImage = imageMap[items.CoverImage];
    const titleImage = imageMap[items.TitleImage];
  return (
    <div 
      className="main-page"
      style={{
        backgroundImage: `url(${coverImage})`,
        backgroundSize: 'cover',       // covers full container
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',            // full viewport height
        width: 'calc(100vw - 80px)',               // full viewport width
        overflowX: 'hidden',           // prevent horizontal scroll
        paddingLeft: '80px'            // space for your sidebar
      }}
    >
      {/* Foreground content */}
      <div className = "featured-content-wrapper">
      <div className="featured-content" style={{ paddingTop: '120px' }}>
        <p style={{ color: '#fff', fontSize: '18px', marginBottom: '10px', letterSpacing: '2px' }}>
          MOVIE
        </p>
        <img 
          src={FeaturedTitleImage} 
          alt="Featured Title" 
          className="featured-title-image" 
        />
      </div>

      <div style={{ fontSize: '16px', lineHeight: '1.6' }}>
          <span>{items.ReleaseYear}</span>&nbsp;&nbsp;&nbsp;
          <span>{items.MpaRating}</span>&nbsp;&nbsp;&nbsp;
          <span> {durationInHours}</span>&nbsp;<br/>
          <span> {items.Description}</span>
        </div>
        </div>
    </div>
  );
};

export default MainMenu;
