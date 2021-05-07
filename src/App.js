import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MovieSeat from './pages/MovieSeat';
import MovieDetails from './pages/MovieDetails';
import {ScrollToTop} from './components/CommonFunctions';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './scss/App.scss';
import ResultPage from './pages/ResultPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/movie/:movieID' exact component={MovieDetails} routerProps={':movieID'}/>
          <Route path='/movie/:movieID/movie-seat' exact component={MovieSeat} routerProps={':movieID'}/>
          <Route path='/category/:category' exact component={ResultPage} routerProps={':category'}/>
          <Route path='/search/:query' exact component={ResultPage} routerProps={':query'}/>
          <Route path='/search/' exact component={ResultPage}/>
        </Switch>
        <Footer />
      </BrowserRouter>     
    </>
  );
}

export default App;
