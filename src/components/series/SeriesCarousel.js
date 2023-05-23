import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Carousel, { consts } from "react-elastic-carousel";

const ContainerCarousel = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000000;
  button.rec-dot {
    visibility: hidden;
  }

  .rec-arrow {
    background-color: black;
    font-size: 1.7rem;
    width: 2vw;
    height: 2vh;
  }
  .rec-arrow:hover {
    background-color: black;
  }

  .rec.rec-arrow:disabled {
    visibility: hidden;
  }
`;
const MainTitle = styled.h2`
  font-size: 20px;
  color: white;
  width: 77%;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const CarouselTitle = styled.h2`
  font-size: 16px;
  color: white;
`;
const CarouselSubTitle = styled.h3`
  font-size: 12px;
  color: white;
`;
export default function SeriesCarouselComponent() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    getFilmes();
  }, []);

  const getFilmes = async () => {
    await axios
      .get(
        "https://api.themoviedb.org/3/tv/airing_today?api_key=cfe6a1839d4b99198be61665abad026e&language=pt-BR&page=1"
      )
      .then((resposta) => {
        const allApi = resposta.data.results.map((item) => {
          return {
            ...item,
            image: `https://image.tmdb.org/t/p/w1280/${item.poster_path}`,
          };
        });
        setFilmes(allApi);
      })
      .catch((error) => alert(`Ocorreu um erro de requisição ${error}`));
  };

  return (
    <>
      <ContainerCarousel>
        <MainTitle>Ultimos lançamentos</MainTitle>
        <Carousel itemsToScroll={3} itemsToShow={5} itemsPadding={[20, 20]}>
          {filmes.map((item) => (
            <div>
              <img
                src={item.image}
                style={{ width: "70%", cursor: "pointer" }}
              />
              <CarouselTitle>{item.name}</CarouselTitle>
              <CarouselSubTitle>
                {item.first_air_date.substring(0, 4)}
              </CarouselSubTitle>
            </div>
          ))}
        </Carousel>
      </ContainerCarousel>
    </>
  );
}
