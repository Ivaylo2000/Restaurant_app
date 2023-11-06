import { useState } from "react";
import "./Home.css";

const images: string[] = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
  "photo1.jpg",
  "photo2.jpg",
  "photo3.jpg",
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  return (
    <>
      <div className="photoContainer">
        <div className="slider">
          <button className="left" onClick={prevImage}>
            {"<"}
          </button>
          <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
          <button className="right" onClick={nextImage}>
            {">"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
