import Button from "./Button";
import "./Modal.css";
import { useEffect } from "react";
import { createPortal } from "react-dom";

const Modal: React.FC<{
  id: string;
  title: string;
  image: string;
  text: string[];
  onAddToCart: (
    id: string,
    title: string,
    img: string,
    ingredients: string[]
  ) => void;
  onClose: () => void;
}> = (props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const modalElement = document.getElementById("modal");

  if (!modalElement) {
    return null;
  }

  return createPortal(
    <div className="modalBlur">
      <div className="modalBackground">
        <span className="closeButton">
          <Button onClick={() => props.onClose()} text="X" />
        </span>
        <div className="modalContainer" key={props.id}>
          <h1>{props.title}</h1>
          <img src={props.image} alt={props.title} />
          <div className="modalIngredients">
            <h3>Ingredients:</h3>
            <p>{props.text.join(", ")} </p>
          </div>
        </div>

        <Button
          text="Add"
          onClick={() =>
            props.onAddToCart(props.id, props.title, props.image, props.text)
          }
        />
      </div>
    </div>,
    modalElement
  );
};
export default Modal;
