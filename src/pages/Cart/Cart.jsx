import { useContext } from "react";
import { CartContext } from "../../context/Cart";

export const Cart = () => {
  const { products, removeProduct } = useContext(CartContext);

  return (
    <>
      {products.map((product) => {
        return (
          <div>
            <img src={product.image} alt="" width={200} />
            <h1>{product.title}</h1>
            <button onClick={() => removeProduct(product.id)}>remove</button>
          </div>
        );
      })}
    </>
  );
};
