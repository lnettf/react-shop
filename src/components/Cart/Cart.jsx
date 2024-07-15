import { useContext } from "react";
import cart from "../../assets/cart.png";
import { CartContext } from "../../context/Cart";
import { CartStyles, CounterStyles, LinkStyle } from "./Cart.styles";
import { Link } from "react-router-dom";

export const Cart = (props) => {
  const { products } = useContext(CartContext);

  return (
    <LinkStyle to={"/cart"}>
      <CartStyles {...props}>
        <img src={cart} alt="" width={32} />

        <CounterStyles>{products.length}</CounterStyles>
      </CartStyles>
    </LinkStyle>
  );
};
