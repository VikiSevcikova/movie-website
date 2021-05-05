import React from 'react';
import Carousel from '../components/content-components/Carousel';
import Slider from '../components/content-components/Slider';
import '../scss/App.scss';

const Home = () => {
  return (
      <>
        <Carousel />
        <div className="container content">
          <div className="row"> 
            <Slider key='now_playing' category='now_playing'/>
        
            <Slider key='popular' category='popular'/>
        
            <Slider key='top_rated' category='top_rated'/>
        
            <Slider key='upcoming' category='upcoming'/>
          </div>
        </div>
      </>
  );
}

export default Home;
