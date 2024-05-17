import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const FooterContainer = styled.footer`
display: flex;
justify-content: center;
align-items: center;
gap: 30px;
`

const Footer = () => {
  return (
    <FooterContainer>
      <Link to={'/'}>Home</Link>
      <Link to={'/Characters'}>Characters</Link>
      <Link to={'/About'}>About</Link>
    </FooterContainer>
  )
}

export default Footer