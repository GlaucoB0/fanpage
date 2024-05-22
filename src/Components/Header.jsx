import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Links = styled.div`
display: flex;
gap: 30px;
`

const NavBar =  styled.nav`
display: flex;
justify-content: space-between;
background-color: gray;
padding: 10px;
`


const Header = () => {
  return (
    <NavBar>
      <Links>
        <Link to={'/'}>Home</Link>
        <Link to={'/Characters'}>Characters</Link>
        <Link to={'/Teams'}>Teams</Link>
        <Link to={'/About'}>About</Link>
      </Links>
      <Link>Sing Up</Link>
    </NavBar>
  )
}

export default Header