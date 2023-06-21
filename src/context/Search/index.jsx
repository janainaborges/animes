import { createContext, useEffect, useState } from "react";
import { api } from "../../service/api";

export const SearchContext = createContext("");

export function SearchProvider({ children }) {
  const [info, setInfo] = useState({});
  const [text, setText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (text) {
        try {
          const result = await api.get(
            `anime?filter[text]=${text}&page[limit]=12`
          );
          setInfo(result.data);
        } catch (e) {
          console.log(e);
        }
      } else {
        try {
          const result = await api.get(`anime`);
          setInfo(result.data);
        } catch (e) {
          console.log(e);
        }
      }
    };
    fetchData();
  }, [text]);
  return (
    <SearchContext.Provider value={{ info, setInfo, text, setText }}>
      {children}
    </SearchContext.Provider>
  );
}
