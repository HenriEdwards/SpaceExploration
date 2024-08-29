import { useState } from "react";
import "./imglayout.css";

export default function ImgLayout({ images , page }) {

  // Function determine page origin and adjust default image to be 'hovered'
  const changeDefaultImgIndex = (page) => {
    if (page == "alternate") {
      return images.length -1;
    } else {
      return 0;
    }
  }
  // State to track which image is being hovered over
  const [hoveredIndex, setHoveredIndex] = useState(changeDefaultImgIndex(page));
  
  // Handle img mouse hover
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  // Reset to default page defined index
  const handleMouseLeave = () => {
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
      <div className="imgs-container">
        {images.map((item, index) => (
          <div
            className={`img-container ${hoveredIndex === index ? 'hovered' : hoveredIndex !== null ? 'shrink' : ''}`}
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
            <img className="img" src={item.src} alt={item.alt} />
            <div className="credit-container">
                <p className="desc">{item.desc}</p>
                <div className="credit-textbox">
                  <a className="credit" href={item.credit} target="_blank">Source</a>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
