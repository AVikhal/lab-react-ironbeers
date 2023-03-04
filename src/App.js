import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Beers from './pages/Beers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import BeerDetails from './pages/BeerDetails';

function App() {
  return (
    <div className="App">

            <Routes>
              <Route path="/beers" element={<Beers />}/>
              <Route path="/random-beer" element={<RandomBeer />}/>
              <Route path="/new-beer" element={<NewBeer />}/>
              <Route path="/" element={<Home />}/>
              <Route path="/beers/:beerId" element={<BeerDetails/>}/>
            </Routes>
    </div>
  );
}

export default App;
