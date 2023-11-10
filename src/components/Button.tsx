import "./Button.css";
const Button: React.FC<{ text: string; onClick: () => void }> = (props) => {
  return (
    <button className="Button" onClick={props.onClick}>
      {props.text}
    </button>
  );
};
export default Button;
