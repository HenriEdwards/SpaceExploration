import { useState } from 'react';
import './imageslayout.css';

export default function ImagesLayout({ images }) {
  // State to track which image is being hovered over
  const [hoveredIndex, setHoveredIndex] = useState(images.length / 2);

  // Function to handle mouse entering an image
  const handleMouseEnter = (index) => {
    // Set the hoveredIndex to the index of the image being hovered over
    setHoveredIndex(index);
  };

  // Function to handle mouse leaving an image
  const handleMouseLeave = () => {
    // Reset the hoveredIndex to null when the mouse leaves the image
    setHoveredIndex(images.length / 2);
  };

  return (
    <div className='image-container'>

      {images.map((item, index) => (
        <div
          className={`image-container-inner ${hoveredIndex === index ? 'hovered' : hoveredIndex !== null ? 'shrink' : ''}`}
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          // style={{ flex: calculateFlexValue(index) }}
        >
          <img className='image' src={item.src} alt={item.alt} />
        </div>
      ))}

    </div>
  );
}
