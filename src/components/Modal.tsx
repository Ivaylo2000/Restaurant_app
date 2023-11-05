import Button from "./Button";
import "./Modal.css";
const Modal: React.FC<{
  title?: string;
  image?: string;
  text?: string[];
  onClose: () => void;
}> = (props) => {
  return (
    <div className="modalBackground">
      <span className="closeButton">
        <button onClick={() => props.onClose()}>X</button>
      </span>
      <div className="modalContainer">
        <h1>{props.title}</h1>
        <img src={props.image} />
        <div className="modalIngredients">
          <h3>Ingredients:</h3>
          <p>{props.text?.join(", ")} </p>
        </div>
      </div>
      <div className="footer">
        <Button text="Add" />
      </div>
    </div>
  );
};
export default Modal;
