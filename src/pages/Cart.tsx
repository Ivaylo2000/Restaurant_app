import { useAppSelector } from "../hooks/useRedux";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cart";
import { addToCart } from "../redux/cart";
import Button from "../components/Button";
import "../components/ListComponent.css";

const Cart = () => {
  const cartItems = useAppSelector((state) => {
    console.log(state);
    return state.items;
  });

  const dispatch = useDispatch();
  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleAddToCart = (
    id: string,
    title: string,
    img: string,
    ingredients: string[]
  ) => {
    dispatch(
      addToCart({
        id,
        title,
        img,
        ingredients,
      })
    );
  };
  return (
    <div className="cartDiv">
      <div className="MenuContainer">
        <h1>Cart</h1>
        <ul className="FoodContainer">
          {cartItems.map((item) => (
            <li key={item.id}>
              <img className="cartImage" src={item.img} alt={item.title} />
              <div className="ingredients-wrapper">
                <h2>{item.title}</h2>
                <div className="meal-wrapper">
                  <h3>Ingredients: </h3>
                  <p>{item.ingredients.join(", ")}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <div className="buttonWrapper">
                  <Button
                    text="+"
                    onClick={() =>
                      handleAddToCart(
                        item.id,
                        item.title,
                        item.img,
                        item.ingredients
                      )
                    }
                  />

                  <Button
                    text="-"
                    onClick={() => handleRemoveFromCart(item.id)}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Cart;
