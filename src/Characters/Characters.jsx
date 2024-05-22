import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import data from '../data.json'
import {
  Container,
  Card,
  ImgCard
} from "./characters.js";

const Characters = () => {

  return (
    <main>
      <div>
        <h1>Characters</h1>
        <Container>
          {data.jogadores.map((personagem) => {
            return (
              <Card>
                <ImgCard src={personagem.img.imgCard}></ImgCard>
                <p>{personagem.nome}</p>
                <Link to={`/Character/${personagem.linkNome}`}>Saiba mais</Link>
              </Card>
            )
          })}
        </Container>
      </div>
    </main>
  )
}

export default Characters