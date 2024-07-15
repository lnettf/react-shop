import { Link } from "react-router-dom";
import { Cart } from "../Cart/Cart";
import { Search } from "../Search/Search";
import { HeaderStyles } from "./Header.styles";

export const Header = () => {
  return (
    <HeaderStyles>
      <Link to="/">
        <img src="https://fakestoreapi.com/icons/logo.png" alt="" width={32} />
      </Link>
      <Search />
      <Cart />
    </HeaderStyles>
  );
};
