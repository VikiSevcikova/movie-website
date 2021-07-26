import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import ResultPage from './components/pages/ResultPage';
import MovieDetails from './components/pages/MovieDetails';
import MovieSeat from './components/pages/MovieSeat';
import {ScrollToTop} from './components/CommonFunctions';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './css/App.css';

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
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
      </Router>     
    </>
  );
}

export default App;
