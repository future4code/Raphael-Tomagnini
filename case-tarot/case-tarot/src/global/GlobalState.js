import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [CartasVisiveis, setCartasVisiveis] = useState([]);
  const [CartasViradas, setCartasViradas] = useState([]);
  const [CartasSelecionadas, setCartasSelecionadas] = useState([]);

  useEffect(() => {
    getCartasVisiveis();
  }, []);

  useEffect(() => {
    const newList = [];
    CartasVisiveis.forEach((item) => {
      axios
        .get(`${BASE_URL}/TarotCards/${item.name}`)
        .then((response) => {
          newList.push(response.data);
          if (newList.length === 3) {
            const orderedList = newList.sort((a, b,) => {
              return a.id - b.id;
            });
            setCartasSelecionadas(orderedList);
          }
        })
        .catch((error) => console.log(error.message));
    });
  }, [TarotCads]);

  const getTarotCards = () => {
    axios
      .get(`${BASE_URL}/pokemon?limit=20`)
      .then((response) => {
        setTarotCards(response.data.results);
      })
      .catch((error) => console.log(error.message));
  };

  const data = {
    TarotCards,
    setTarotCards,
    CartasSelecionadas,
    setCartasSelecionadas
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
