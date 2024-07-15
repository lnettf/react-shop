import { useState } from "react";
import { createContext } from "react";

const defaultContextValue = {
  products: [],
  addProduct: (product) => {},
  removeProduct: (product) => {},
};

export const CartContext = createContext(defaultContextValue);

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const removeProduct = (productId) => {
    const _products = [...products];
    const index = _products.findIndex((product) => product.id === productId);

    _products.splice(index, 1);
    setProducts(_products);
  };

  return (
    <CartContext.Provider
      value={{
        products,
        addProduct,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
