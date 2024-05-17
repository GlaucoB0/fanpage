import Footer from "../Components/Footer";
import Header from "../Components/Header";

import Home from './Home';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Characters from "../Characters/Characters";
import Hinata from "../Characters/Hinata";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Characters' element={<Characters />} />
        <Route path='/Character/Hinata' element={<Hinata />} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default App