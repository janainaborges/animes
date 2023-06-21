import { createContext, useState } from "react";

export const FavoriteProvider = createContext();

export default function CartProvider({ children }) {
  const [favorite, setFavorite] = useState([]);


  function addProducToCart(id) {
    const copyfavorite = [...favorite];

    const item = copyfavorite.find((product) => product.id === id);

    if (!item) {
      copyfavorite.push({ id: id });
    } else {
      item = item + 1;
    }

    setFavorite(copyfavorite);
  }

  function removeProductToCart(id) {
    const copyfavorite = [...favorite];

    const item = copyfavorite.find((product) => product.id === id);

    if (item && item > 1) {
      item = item - 1;
      setFavorite(copyfavorite);
    } else {
      const arrayFiltered = copyfavorite.filter(
        (product) => product.id !== id
      );
      setFavorite(arrayFiltered);
    }
  }

  function clearCart() {
    setFavorite([]);
  }

  return (
    <FavoriteProvider.Provider
      value={{ favorite, addProducToCart, removeProductToCart, clearCart }}
    >
      {children}
    </FavoriteProvider.Provider>
  );
}