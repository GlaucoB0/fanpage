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

const Teams = () => {

  return (
    <main>

      <div>
        <h1>Teams</h1>
        <Container>
          {data.equipes.map((equipe) => {
            return (
              <Card>
                <ImgCard src={equipe.img}></ImgCard>
                <p>{equipe.nome}</p>
                <Link to={`/Teams/${equipe.nome}`}>Saiba mais</Link>
              </Card>
            )
          })}
        </Container>
      </div>
    </main>
  )
}

export default Teams