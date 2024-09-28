import "./Home.css";
import { useState, useEffect } from "react";
const images: string[] = ["burger.jpg", "pizza.jpg", "bbq.jpg"];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="HomePage">
      <h1> A Symphony of Flavors!</h1>

      <img className="menuItems" src={images[currentImageIndex]} alt="" />
    </div>
  );
};

export default Home;
