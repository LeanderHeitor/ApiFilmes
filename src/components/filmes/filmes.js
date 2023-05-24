import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Lupa from "../filmes/image.png";

export const FilmesSection = styled.section`
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
    margin-top: 20px;
    margin-bottom: 20px;
    cursor: pointer;
  }
  h2 {
    font-size: 18px;
    color: white;
    text-align: start;
    font: normal normal bold Open Sans;
  }
  h3 {
    font-size: 16px;
    color: white;
    text-align: start;
    font: normal normal 300 Open Sans;
    color: #f6f6f6;
    opacity: 0.5;
  }
`;

export const SearchInput = styled.input`
  display: ${(props) => props.show};
  margin-right: 30px;
  border-radius: 30%;
  background: none;
  color: white;
  height: 3vh;
  width: 7vw;
`;

export default function Filmes() {
  const [filmes, setFilmes] = useState([]);
  const [input, setInput] = useState("");
  const [filtrados, setFiltrados] = useState([]);
  const [mode, setMode] = useState(false);

  useEffect(() => {
    getFilmes();
  }, []);

  const getFilmes = async () => {
    try {
      const resposta = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=cfe6a1839d4b99198be61665abad026e&language=pt-BR&page=1"
      );
      const allApi = resposta.data.results.map((item) => {
        return {
          ...item,
          image: `https://image.tmdb.org/t/p/w1280/${item.poster_path}`,
        };
      });
      setFilmes(allApi);
    } catch (error) {
      alert(`Ocorreu um erro de requisição ${error}`);
    }
  };
  useEffect(() => {
    filtrar();
  }, [filmes]);

  const filtrar = () => {
    const filtros = filmes.filter((item) => {
      if (item.title.toLowerCase().includes(input.toLowerCase())) {
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
      <FilmesSection>
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
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <h3>{item.release_date.substring(0, 4)}</h3>
          </MapSection>
        ))}
      </FilmesSection>
    </>
  );
}
