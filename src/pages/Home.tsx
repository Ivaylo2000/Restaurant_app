import { useState } from "react";
import "./Home.css";

const images: string[] = [
  "Burger.png",
  "https://png.pngtree.com/png-clipart/20230412/original/pngtree-modern-kitchen-food-boxed-cheese-lunch-pizza-png-image_9048155.png",
  "https://cdncloudcart.com/16398/products/images/49233/kufte-na-skara-tt-br-63415e8a6605d_600x600.png?1665229142",
  "https://images.squarespace-cdn.com/content/v1/538500e4e4b0fa9e95efc7b9/1474392930540-RNI6ZJM0QYI959EGHK2K/adj_GFVeryBerryCC.png?format=1000w",
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
    <div className="HomePage">
      <h1> A Symphony of Flavors!</h1>
      <div className="slider">
        <button className="left" onClick={prevImage}>
          <img src="leftArrow.png" alt="Arrow" />
        </button>
        <img src={images[currentImage]} alt="image" />
        <button className="right" onClick={nextImage}>
          <img src="rightArrow.png" alt="Arrow" />
        </button>
      </div>
    </div>
  );
};

export default Home;
