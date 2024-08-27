import { useState } from 'react';
import './imglayout.css';

export default function ImgLayout({ images , page }) {
  // State to track which image is being hovered over


  // Function determine page origin and adjust default image to be 'hovered'
  const changeDefaultImgIndex = (page) => {
    if (page == "voyager") {
      return images.length -1;
    } else {
      return 0;
    }
  }
  const [hoveredIndex, setHoveredIndex] = useState(changeDefaultImgIndex(page));
  // Function to handle mouse entering an image
  const handleMouseEnter = (index) => {
    // Set the hoveredIndex to the index of the image being hovered over
    setHoveredIndex(index);
  };

  // Function to handle mouse leaving an image
  const handleMouseLeave = () => {
    // Reset the hoveredIndex to null when the mouse leaves the image
    setHoveredIndex(changeDefaultImgIndex(page));
  };

  // Calc custom height based on distance between hovered image & non-hovered image
  const calcHeight = (index) => {
    const baseHeight = 500; 
    const diff = Math.abs(index - hoveredIndex);
    return baseHeight / (diff + 1); 
  };

  // Function compares and returns index between hovered & normal images
  const calcZIndex = (index) => {
    const diff = Math.abs(index - hoveredIndex);
    return 100 -diff ;
  };

  return (
    <div className="img-layout">
      <div className='image-container'>
        {images.map((item, index) => (
          <div
          // ${hoveredIndex === index ? 'hovered' : hoveredIndex !== null ? 'shrink' : ''}
            className={`image-container-inner ${hoveredIndex === index ? 'hovered' : hoveredIndex !== null ? 'shrink' : ''}`}
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={{
               // custom height
              height: `${calcHeight(index)}px`, 
               // custom z index 
              zIndex: calcZIndex(index), 
            }}
          >
            <img className='image' src={item.src} alt={item.alt} />
            <div className='credit-text'>
                <p className='credit'>{item.desc}</p>
                <div className='credit-box'>
                  <a className='credit' href={item.credit}>Source</a>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
