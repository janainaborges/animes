import React from "react";
import * as S from "./style";

export function Cards({ CardsItem }) {
  return (
    <>
      {CardsItem.map(({ title, image, id, alt, onClick, FavoriteClick}) => (
        <>
          <button onClick={FavoriteClick}>ADD</button>
          <button
            onClick={() => onClick()}
            style={{ backgroundColor: "white", border: "none" }}
          >
            <S.Container key={id}>
              <S.Content>
                <S.Image>
                  <img src={image} alt={alt} />
                </S.Image>
                <S.Title>{title}</S.Title>
              </S.Content>
            </S.Container>
          </button>
        </>
      ))}
    </>
  );
}
