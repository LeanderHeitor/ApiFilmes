import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Lupa from "../filmes/image.png";

export const SeriesSection = styled.section`
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  color: white;
  width: 26.5%;
  text-align: center;
`;

export const SearchSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    align-items: center;
  }

  img {
    width: 3vw;
    cursor: pointer;
  }
`;

export const MapSection = styled.section`
  width: 17%;
  margin-bottom: 20px;
  img {
    width: 100%;
    text-align: center;
    cursor: pointer;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  h2 {
    font-size: 16px;
    color: white;
    text-align: center;
  }
  h3 {
    font-size: 12px;
    color: white;
    text-align: center;
  }
`;

export const SearchInput = styled.input`
  display: ${(props) => props.show};
  margin-right: 30px;
`;

export default function Series() {
  const [series, setSeries] = useState([]);
  const [input, setInput] = useState("");
  const [filtrados, setFiltrados] = useState([]);
  const [mode, setMode] = useState(false);

  useEffect(() => {
    getSeries();
  }, []);

  const getSeries = async () => {
    try {
      const resposta = await axios.get(
        "https://api.themoviedb.org/3/tv/popular?api_key=cfe6a1839d4b99198be61665abad026e&language=pt-BR&page=1"
      );
      const allApi = resposta.data.results.map((item) => {
        return {
          ...item,
          image: `https://image.tmdb.org/t/p/w1280/${item.poster_path}`,
        };
      });
      setSeries(allApi);
    } catch (error) {
      alert(`Ocorreu um erro de requisição ${error}`);
    }
  };
  useEffect(() => {
    filtrar();
  }, [series]);

  const filtrar = () => {
    const filtros = series.filter((item) => {
      if (item.name.toLowerCase().includes(input.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    });
    setFiltrados(filtros);
    console.log(filtrados);
  };

  useEffect(() => {
    filtrar();
  }, [input]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <>
      <SeriesSection>
        <SearchSection>
          <SectionTitle>Em Alta</SectionTitle>
          <div>
            <img onClick={() => setMode(!mode)} src={Lupa} alt="Pesquisar" />
            <SearchInput
              show={mode === false ? "none" : "initial"}
              value={input}
              onChange={handleInputChange}
            />
          </div>
        </SearchSection>
        {filtrados.map((item) => (
          <MapSection key={item.id}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <h3>{item.first_air_date.substring(0, 4)}</h3>
          </MapSection>
        ))}
      </SeriesSection>
    </>
  );
}
