import React from "react";
import useSearch from "../../hooks/useSearch";

import * as Styled from "./style";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  const { info, setInfo, text, setText } = useSearch();
  return (
    <Styled.SHeaderFixed>
      <Styled.SHeader>
        <Styled.SLeft>
          <Styled.SArrowIcon />
          ANIMES
          <Link to="/">Animes</Link>
        </Styled.SLeft>
        <Styled.SCenter></Styled.SCenter>
        <Styled.SRight>
          <input value={text} onChange={(e) => setText(e.target.value)} />
          <Link to="/favoritos">Favoritos</Link>
        </Styled.SRight>
      </Styled.SHeader>
    </Styled.SHeaderFixed>
  );
}
