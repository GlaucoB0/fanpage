import React from 'react'
import { CharacterContainer, InfoCharacter, NomeJapones } from './character'


const Hinata = () => {
  return (
    <CharacterContainer>
    <InfoCharacter>
      <h2>Haikyuu!</h2>

      <div>
      <h1>Hinata Shoyo</h1>
      <NomeJapones>日ひ向なた翔しょう陽</NomeJapones>
      </div>

      <p>Shoyo Hinata (日ひ向なた翔しょう陽よう Hinata Shōyō?) é o principal protagonista de Haikyuu!!. Ele é estudante do primeiro ano no Colégio Karasuno e é um dos bloqueadores do meio da equipe de vôlei. O sonho de Hinata é tornar-se forte o suficiente para ultrapassar os altos bloqueadores, assim como o Pequeno Gigante fez. No entanto, uma vez que ele não tem altura para um bloqueador médio, ele é especialista em saltar para compensar. Após se formar no colégio, ele viajou até o Brasil para treinar vôlei de praia por dois anos. E ao retornar para o Japão ele se tornou membro do time MSBY Black Jackals, 1ª divisão na Liga V.</p>
    </InfoCharacter>

    <img src={'https://upload.wikimedia.org/wikipedia/en/5/55/Shoyo_Hinata.png'} alt="" />
    </CharacterContainer>
  )
}

export default Hinata