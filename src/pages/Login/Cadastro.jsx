
import { useState } from 'react'
import data from '../../data/usuarios.json'
import fs from 'fs'

const Cadastro = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const AddUser = () => {
    event.preventDefault()
    
    data.push({
      nome,
      senha,
      email
    })

    fs.writeFile('src/data/usuarios.json', JSON.stringify(data,null,2))
    
  }
  return (
    <form>
      <label htmlFor="">Nome:</label>
      <input type='text' name='nome' placeholder='Insira seu nome' onChange={()=>setNome(event.target.value.trim())}/>
      <label htmlFor="">Email:</label>
      <input type='email' name='email' placeholder='Insira seu email' onChange={()=>setEmail(event.target.value.trim())}/>
      <label htmlFor="">Senha:</label>
      <input type='password' name='senha' placeholder='Insira sua senha' onChange={()=>setSenha(event.target.value.trim())}/>

      <button onClick={AddUser}>Cadastrar</button>
    </form>
  )
}

export default Cadastro