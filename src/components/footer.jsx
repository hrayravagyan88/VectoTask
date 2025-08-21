import { useState, useEffect } from 'react';

const Carousel = ({ items,onSelectItem}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [sortedItems, setSortedItems] = useState([]);
  
  useEffect(() => {
    const sorted = [...items]
      .sort((a, b) => new Date(b.Date) - new Date(a.Date))
      .slice(0, 50);
    setSortedItems(sorted);
  }, [items]);

  const getImageUrl = (filename) => {
    try {
      return new URL(`../assets/${filename}`, import.meta.url).href;
    } catch (error) {
      console.error(`Error loading image: ${filename}`, error);
      return '';
    }
  };

  const nextSlide = () => {
    if (!isOpen) {
      setIsOpen(true);
      return;
    }
    setCurrentIndex((prevIndex) => 
      prevIndex === sortedItems.length - 8 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    if (!isOpen || currentIndex === 0) return;
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? sortedItems.length - 8 : prevIndex - 1
    );
  };

  return (
    <div className={`carousel-wrapper ${isOpen ? 'open' : ''}`}>
      <h2 className="carousel-header">Trending Now</h2>
      <div className="carousel-container">
        {isOpen && currentIndex > 0 && (
          <button 
            className="carousel-button prev" 
            onClick={prevSlide}
          >
            ❮
          </button>
        )}
        <div className="carousel-items">
          {sortedItems.slice(currentIndex, currentIndex + 8).map((item) => (
            <div key={item.Id} className="carousel-item" onClick={() => onSelectItem(item.Id)}>
              <img 
                src={getImageUrl(item.CoverImage)}
                alt={item.Title} 
                className="carousel-image"
              />
            </div>
          ))}
        </div>
        <button 
          className="carousel-button next" 
          onClick={nextSlide}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Carousel;