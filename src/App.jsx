import { useState, useEffect } from 'react'
import Carousel from './components/footer.jsx'
import data from './assets/data.json'
import MainMenu from './components/mainMenu.jsx'
import './App.css'

import icon1 from './assets/icons/Group 46.png'
import icon2 from './assets/icons/Group 47.png'
import icon3 from './assets/icons/Group 53.png'
import icon4 from './assets/icons/Group 54.png'
import icon5 from './assets/icons/Group 56.png'
import icon6 from './assets/icons/ICON - Search.png'

function App() {
  const [featuredItem, setFeaturedItem] = useState(null);
  useEffect(() => {
    setFeaturedItem(data.Featured);
  }, []);

  if (!featuredItem) {
    return <div>Loading...</div>; // optional loading state
  }

  const handleSelectItem = (id) => {

    const newFeatured = data.TendingNow.find(item => item.Id === id);
    if (newFeatured) {
      console.log(newFeatured)
      setFeaturedItem(newFeatured);
    }
  };
  return (
    <div className="app-container">
      <div className="sidebar">
        <div className="profile-info">
          <div className="avatar">D</div>
          <span className="profile-name">Daniel</span>
        </div>

        <div className="sidebar-icons">
          <div className="sidebar-item">
            <img src={icon6} alt="Search" className="sidebar-icon" />
            <span className="sidebar-text">Search</span>
          </div>
          <div className="sidebar-item">
            <img src={icon1} alt="Home" className="sidebar-icon" />
            <span className="sidebar-text">Home</span>
          </div>
          <div className="sidebar-item">
            <img src={icon2} alt="TV Shows" className="sidebar-icon" />
            <span className="sidebar-text">TV Shows</span>
          </div>
          <div className="sidebar-item">
            <img src={icon3} alt="Movies" className="sidebar-icon" />
            <span className="sidebar-text">Movies</span>
          </div>
          <div className="sidebar-item">
            <img src={icon4} alt="Genres" className="sidebar-icon" />
            <span className="sidebar-text">Genres</span>
          </div>
          <div className="sidebar-item">
            <img src={icon5} alt="Watch Later" className="sidebar-icon" />
            <span className="sidebar-text">Watch Later</span>
          </div>
        </div>

        <div className="profile-section">
          <div className="bottom-menu">
            <div className="menu-item">Language</div>
            <div className="menu-item">Get Help</div>
            <div className="menu-item">Exit</div>
          </div>
        </div>
      </div>

      <div className="main-content">
        <MainMenu items={featuredItem} />
      </div>
      <footer className="footer" >
        <Carousel items={data.TendingNow} onSelectItem={handleSelectItem} />
      </footer>
    </div>
  )
}

export default App
