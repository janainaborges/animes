import { useContext } from "react";
import { SearchContext } from "../context/Search";

export default function useSearch() {
  const { info, setInfo, text, setText } =
    useContext(SearchContext);
  return { info, setInfo, text, setText };
}
