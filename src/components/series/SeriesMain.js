import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import estrela from "../assets/star.png";
import imdb from "../assets/IMDB_Logo_2016.svg";
import play from "../assets/play-32.png";
import trailer from "../assets/icons8-filme-50.png";

export const MainStyle = styled.main`
  background-image: url(${(props) => props.back});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  height: 100vh;
  color: white;
  max-width: 100%;
  display: flex;
  flex-direction: column;
`;
export const DIV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 70%;
  margin-left: 101px;

  h1 {
    color: #bec5b5;
    font: normal normal bold Open Sans;
  }

  h3 {
    color: #bec5b5;
    font: normal normal bold Open Sans;
  }

  p {
    color: #bec5b5;
    font-size: 1.2rem;
    width:45vw;
    font: normal normal bold Open Sans;
    opacity:0.7;
  }
`;
export const ButtonDiv = styled.div`
  margin-left: 101px;
  width: 21%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ButtonWatch = styled.button`
  color: #ffffff;
  background-color: #d53a00;
  border-radius: 21px;
  height: 4.1vh;
  width: 9.3vw;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-width: 3px;
  font: normal normal 600 Open Sans;
  font-size:1.1rem;
  img {
    margin-right: 6px;
  }
`;
export const ButtonTrailer = styled.button`
  color: #ffffff;
  background-color: #717171;
  border-radius: 21px;
  height: 4.1vh;
  width: 9.3vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 3px;
  cursor: pointer;
  font: normal normal 600 Open Sans;
  font-size:1.1rem;
  img {
    margin-right: 6px;
  }
`;
export default function SeriesMain() {
  const [series, setSeries] = useState([]);
  const [fundo, setFundo] = useState([]);

  useEffect(() => {
    getSeries();
  });
  const getSeries = async () => {
    await axios
      .get(
        "https://api.themoviedb.org/3/tv/popular?api_key=cfe6a1839d4b99198be61665abad026e&language=pt-BR&page=1"
      )
      .then((resposta) => {
        const allApi = resposta.data.results.map((item) => {
          return {
            ...item,
            poster: `https://image.tmdb.org/t/p/w1280/${item.backdrop_path}`,
          };
        });
        setSeries(allApi);
        setFundo((arrayAntiga) => (arrayAntiga = series.slice(0, 1)));
        console.log(fundo);
      })
      .catch((error) =>
        alert(`desculpe, você teve um erro de requisição ${error}`)
      );
  };

  return (
    <>
      <MainStyle back={fundo.map((item) => item.poster)}>
        {fundo.map((item) => (
          <DIV>
            <h1>{item.name}</h1>
            <h3>
              <img src={estrela} style={{ width: "0.8vw" }} />
              {item.vote_average} <img src={imdb} style={{ width: "1.7vw" }} />
            </h3>
            <h3>Lançamento: {item.first_air_date.substring(0, 4)}</h3>
            <p>Sinopse: ... {item.overview}</p>

            <ButtonDiv>
              <ButtonWatch>
                <img src={play} style={{ width: "0.8vw" }} /> Assista agora
              </ButtonWatch>
              <ButtonTrailer>
                <img src={trailer} style={{ width: "0.8vw" }} />
                Trailer
              </ButtonTrailer>
            </ButtonDiv>
          </DIV>
        ))}
      </MainStyle>
    </>
  );
}
