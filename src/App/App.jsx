import Footer from "../Components/Footer";
import Header from "../Components/Header";

import Home from './Home';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Characters from "../Characters/Characters";
import Character from "../Characters/Character";
import Teams from "../Teams/Teams";
import Team from "../Teams/Team";
import About from "../About/About";
import NotFound from "../404/NotFound";

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
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default App