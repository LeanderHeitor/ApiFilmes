import {useState, useEffect} from "react"
import styled from "styled-components"
import axios from 'axios'

export const MainStyle = styled.main`
background-image:url(${props => props.back});
background-repeat:no-repeat;
background-size:100% 100%;
background-position:center;
height:100vh;
color:white;
border: solid black;
max-width:100%;
display:flex;
flex-direction:column;
`
export const DIV = styled.div `
border: solid black;
display: flex;
flex-direction:column;
  justify-content: end;
  height: 70%;
  margin-left:101px;

  h1{
   
  }

  h3{
    
  }

  p{
    font-size:1.2rem;
  }

`
export const ButtonDiv = styled.div`
margin-left:101px;
width:21%;
height:10vh;
display:flex;
border: solid blue;
justify-content:space-between;
align-items:center;

`
export const ButtonWatch = styled.button`
color:#FFFFFF;
background-color:#D53A00;
border-radius:21px;
height:4.1vh;
width:9.3vw;
`
export const ButtonTrailer = styled.button`
color:#FFFFFF;
background-color:#717171;
border-radius:21px;
height:4.1vh;
width:9.3vw;
`
export default function Main (){
    const [filmes, setFilmes] = useState([])
    const [fundo, setFundo] = useState([])

    useEffect(()=>{
        getFilmes()
    })
    const getFilmes = async() => {
        await axios.get ('https://api.themoviedb.org/3/movie/popular?api_key=cfe6a1839d4b99198be61665abad026e&language=pt-BR&page=1').then(resposta => {
            const allApi = resposta.data.results.map((item)=>{
                return {
                    ...item,
                    poster:`https://image.tmdb.org/t/p/w1280/${item.backdrop_path}`
                }
            })
            setFilmes(allApi)
            setFundo(arrayAntiga => arrayAntiga = filmes.slice(0,1))
            console.log(fundo);
        }).catch(error=> alert(`desculpe, você teve um erro de requisição ${error}`))
    }

return(
    <>
    <MainStyle back={fundo.map(item=>item.poster)}>
        {fundo.map(item=>(
            <DIV>
                
                <h1>{item.title}</h1>
                <h3>IMDB: {item.vote_average}</h3>
                <h3>Lançamento: {item.release_date}</h3>
                <p>Sinopse: {item.overview}</p>

                <ButtonDiv>
                <ButtonWatch>Assista agora</ButtonWatch>
                <ButtonTrailer>Trailer</ButtonTrailer>
                </ButtonDiv>
            </DIV>
           
            
        ))}
    </MainStyle>
    </>
)
}