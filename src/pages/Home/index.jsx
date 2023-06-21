import React, { useState } from "react";
import { useEffect } from "react";
import { Cards } from "../../components/Cards";
import { Modal } from "../../components/Modal";
import Navbar from "../../components/Navbar";
import useFavorite from "../../hooks/useFavorite";
import useSearch from "../../hooks/useSearch";
import { Layout } from "../../layout";
import Favoritos from "../Favoritos";

import * as S from "./style";

export default function Home() {
  const { info, setInfo, text, setText } = useSearch();
  const { favorite, addProducToCart, removeProductToCart, clearCart } =
    useFavorite();
  const [open, setOpen] = useState(false);
  const [capture, setCpture] = useState([]);

  return (
    <S.Container>
      <Layout />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {text && !info.data && <span>Carregando...</span>}
        {info.data && (
          <>
            <Cards
              CardsItem={info.data.map((anime) => ({
                id: anime.id,
                title: anime.attributes.canonicalTitle,
                image: anime.attributes.posterImage.medium,
                alt: anime.type,
                onClick: () => {
                  setCpture(anime);
                  setOpen(true);
                },
                FavoriteClick: () => {
                  addProducToCart(anime);
                  favorite.find((item) => item.id === anime.id)
                    ? favorite.find((item) => item.id === anime.id)
                    : 0;
                },
              }))}
            />
          </>
        )}
        {open && (
          <Modal
            open={open}
            setOpen={() => setOpen(!open)}
            title={capture.attributes.canonicalTitle}
            image={capture.attributes.posterImage.medium}
          />
        )}
      </div>
    </S.Container>
  );
}
