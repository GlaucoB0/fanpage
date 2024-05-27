
import styled from 'styled-components'

const Linkar = styled.button`
background-color: #dd7017;
border-radius:8px;
padding:10px;
font-weight:bold;
cursor:pointer;
&:hover{
    background-color: #c03f0c;
}
`

const Container = styled.div`
    text-align:center;
`

const NotFound = () => {

  return (
    <main>
        <Container>
            <img src="src/img/notfound.png" alt="" />
            <h1>OPS! NÃO ENCONTRAMOS ESTA PAGINA</h1>
            <a href='/'>
                <Linkar>Voltar para pagina inicial.</Linkar>
            </a>
        </Container>
    </main>
  )
}

export default NotFound