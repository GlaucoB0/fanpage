
import data from '../../data/data.json'
import { CharacterContainer, InfoCharacter, NomeJapones } from './character.js'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Img = styled.img`
  max-width: 400px;
`

const Character = () => {
  const url = window.location.href.split('/')[4]
  const Personagem = data.jogadores.find((personagem) => personagem.linkNome == url)

  return (
    <CharacterContainer>
      <InfoCharacter>
        <h2>{Personagem.anime}</h2>

        <div>
          <h1>{Personagem.nome}</h1>
          <NomeJapones>{Personagem.NomeJapones}</NomeJapones>
        </div>
        <Link to={`/Teams/${Personagem.equipe}`}>{Personagem.equipe}</Link>

        <p>{Personagem.desc}</p>
      </InfoCharacter>

      <Img src={Personagem.img.imgGrande} alt="" />
    </CharacterContainer>
  )
}

export default Character