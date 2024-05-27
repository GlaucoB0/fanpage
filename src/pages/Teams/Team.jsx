
import { useParams } from 'react-router-dom'
import data from '../../data/data.json'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ImgCard = styled.img`
max-width: 200px;
`
const Container = styled.div`
max-width: 1000px;
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(auto-fill, 186px);
`
const Card = styled.div`
height: 400px;
width: 200px;
`

const Team = () => {

  const { team } = useParams()
  const jogadores = data.jogadores.filter((jogador)=> jogador.equipe == team)

  return (
    <main>
      <Container>
        {jogadores.map((personagem) => {
          return (
            <Card>
              <ImgCard src={personagem.img.imgCard}></ImgCard>
              <p>{personagem.nome}</p>
              <Link to={`/Character/${personagem.linkNome}`}>Saiba mais</Link>
            </Card>
          )
        })}
      </Container>
    </main>
  )
}

export default Team