import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Header } from "./components/Header/Header";
import { Cart } from "./pages/Cart/Cart";
import { ProductDetail } from "./pages/ProductDetail/ProductDetail";

const Wrapper = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Wrapper>
        <Home />
      </Wrapper>
    ),
  },
  {
    path: "cart",
    element: (
      <Wrapper>
        <Cart />
      </Wrapper>
    ),
  },
  {
    path: "product/:productId",

    element: (
      <Wrapper>
        <ProductDetail />
      </Wrapper>
    ),
  },
]);
