import { useContext } from "react";
import { FavoriteProvider } from "../context/Favorite";

export default function useFavorite() {
  const { favorite, addProducToCart, removeProductToCart, clearCart } =
    useContext(FavoriteProvider);
  return { favorite, addProducToCart, removeProductToCart, clearCart };
}
