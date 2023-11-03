import "./Button.css";
const Button: React.FC<{ text: string }> = (props) => {
  return <button className="Button">{props.text}</button>;
};
export default Button;
