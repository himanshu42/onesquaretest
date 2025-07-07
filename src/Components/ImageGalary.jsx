import React from 'react';
import image1 from '../assets/Desktop/mainbanner.png'
import image2 from '../assets/Desktop/banner-3.png'
import image3 from '../assets/Desktop/banner-2.png'

const ImageGalary = () => {
  return (
    <div className="gallery-container">
      <div className="gallery">
        <img src={image1} alt="Left" className="gallery-image left" />
        <img src={image2} alt="Center" className="gallery-image center" />
        <img src={image3} alt="Right" className="gallery-image right" />
      </div>
    </div>
  );
};

export default ImageGalary;
