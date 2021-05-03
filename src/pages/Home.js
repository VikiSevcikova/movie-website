import React, {useEffect} from 'react';
import Carousel from '../components/content-components/Carousel';
import MovieGrid from '../components/content-components/MovieGrid';
import Slider from '../components/content-components/Slider';
import '../scss/App.scss';

const Home = () => {
  return (
      <>
        <Carousel />
        <div className="container content">
          <div className="row"> 
            <Slider category='now_playing'/>
        
            <Slider category='popular'/>
        
            <Slider category='top_rated'/>
        
            <Slider category='upcoming'/>
          </div>
        </div>
      </>
  );
}

export default Home;
