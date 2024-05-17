import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
height: 400px;
width: 200px;
`

const Characters = () => {
  return (
    <div>
      <Card>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIdhD8f-wSvbu9OLFKqFmjqI7ekDoMM7Wk8CdsdZyHPtHTF9MWV-b0BDIHpK6Y6TwQksA&usqp=CAU" alt="" />
        <Link to={'/Character/Hinata'}>Descobrir Personagem</Link>
      </Card>
    </div>
  )
}

export default Characters