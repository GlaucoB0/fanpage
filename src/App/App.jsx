import Footer from "../Components/Footer";
import Header from "../Components/Header";

import Home from './Home';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Characters from "../pages/Characters/Characters";
import Character from "../pages/Characters/Character";
import Teams from "../pages/Teams/Teams";
import Team from "../pages/Teams/Team";
import About from "../pages/About/About";
import NotFound from "../pages/404/NotFound";
import Login from "../pages/Login/Login";
import Cadastro from "../pages/Login/Cadastro";

const App = () => {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        
        <Route path='/About' element={<About />} />
        <Route path='/Characters' element={<Characters />} />
        <Route path='/Teams' element={<Teams />} />
        <Route path='/Teams/:team' element={<Team />} />
        <Route path={`/Character/:linkNome`} element={<Character />} />
        <Route path={`/Cadastro`} element={<Cadastro />} />
        <Route path={`/Login`} element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default App