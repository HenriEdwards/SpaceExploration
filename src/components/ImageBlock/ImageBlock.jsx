import { useState } from 'react';
import './ImageBlock.css';

export default function ImageBlock({ images }) {
  // State to track which image is being hovered over
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Function to handle mouse entering an image
  const handleMouseEnter = (index) => {
    // Set the hoveredIndex to the index of the image being hovered over
    setHoveredIndex(index);
  };

  // Function to handle mouse leaving an image
  const handleMouseLeave = () => {
    // Reset the hoveredIndex to null when the mouse leaves the image
    setHoveredIndex(null);
  };

  return (
    <div className='images-container'>
      {images.map((item, index) => (
        <div
          className={`image-block ${hoveredIndex === index ? 'hovered' : hoveredIndex !== null ? 'shrink' : ''}`}
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <img className='side-image' src={item.src} alt={item.alt} />
        </div>
      ))}
    </div>
  );
}
