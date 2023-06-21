import React from "react";
import { Cards } from "../../components/Cards";
import useFavorite from "../../hooks/useFavorite";
import { Layout } from "../../layout";

export default function Favoritos() {
  const { favorite, removeProductToCart } = useFavorite();
  return (
    <div>
      <Layout />

      <Cards
        CardsItem={favorite.map((anime) => ({
          id: anime.id.id,
          title: anime.id.attributes.canonicalTitle,
          image: anime.id.attributes.posterImage.medium,
          alt: anime.id.type,
          FavoriteClick: () => {
            removeProductToCart(anime);
            favorite.find((item) => item.id === anime.id)
              ? favorite.find((item) => item.id === anime.id)
              : 0;
          },
        }))}
      />
    </div>
  );
}
