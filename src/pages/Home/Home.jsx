import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { HomeStyles } from "./Home.styles";
import { CartContext } from "../../context/Cart";
import { Link } from "react-router-dom";

export const Home = () => {
  const [products, setProducts] = useState([]);

  const { addProduct, products: _products } = useContext(CartContext);

  console.warn({ addProduct, _products });

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((result) => {
      console.warn({ result });
      setProducts(result.data);
    });
  }, []);

  return (
    <HomeStyles.Container>
      {products.map((product) => {
        return (
          <HomeStyles.Card>
            <HomeStyles.CardImage src={product.image} alt={product.title} />
            <HomeStyles.CardTitle>{product.title}</HomeStyles.CardTitle>
            <HomeStyles.CardOptions>
              <button onClick={() => addProduct(product)}>
                Añadir al carrito
              </button>
              <Link to={`/product/${product.id}`}>Ver</Link>
            </HomeStyles.CardOptions>
          </HomeStyles.Card>
        );
      })}
    </HomeStyles.Container>
  );
};
