import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/Cart";
import {
  ProductDetailDescriptionStyles,
  ProductDetailLeftStyles,
  ProductDetailRightStyles,
  ProductDetailStyles,
} from "./ProductDetail.styles";

export const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const { addProduct } = useContext(CartContext);

  console.warn({ productId });

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/" + productId)
      .then((result) => {
        console.warn({ result });
        if (!result.data) {
          // redirect to 404
        }
        setProduct(result.data);
      });
  }, []);

  return (
    <div>
      {Object.keys(product).length === 0 && <>Cargando....</>}

      {Object.keys(product).length > 1 && (
        <ProductDetailStyles>
          <ProductDetailLeftStyles>
            <img src={product.image} width={200} />
          </ProductDetailLeftStyles>
          <ProductDetailRightStyles>
            <h1>{product.title}</h1>
            <h3>{product.price}€</h3>
            <p>
              Starts: {product.rating.rate} ({product.rating.count})
            </p>

            <p>#{product.category}</p>

            <button onClick={() => addProduct(product)}>
              Añadir al carrito
            </button>
          </ProductDetailRightStyles>

          <ProductDetailDescriptionStyles>
            <p>{product.description}</p>
          </ProductDetailDescriptionStyles>
        </ProductDetailStyles>
      )}
    </div>
  );
};
