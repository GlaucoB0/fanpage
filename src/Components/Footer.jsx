
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const FooterContainer = styled.footer`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: gray;
`

const Links = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 30px;
`

const Footer = () => {
  return (
    <FooterContainer>
      <Links>
        <Link to={'/'}>Home</Link>
        <Link to={'/Characters'}>Characters</Link>
        <Link to={'/Teams'}>Teams</Link>
        <Link to={'/About'}>About</Link>
      </Links>
      <p>by GlaucoB0</p>
    </FooterContainer>
  )
}

export default Footer