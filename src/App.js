import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MovieSeat from './pages/MovieSeat';
import MovieDetails from './pages/MovieDetails';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './scss/App.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/movie/:movieID' exact component={MovieDetails} routerProps={':movieID'}/>
          <Route path='/movie-seat' exact component={MovieSeat}/>
        </Switch>
        <Footer />
      </BrowserRouter>     
    </>
  );
}

export default App;
