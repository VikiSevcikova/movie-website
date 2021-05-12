import React, { useEffect } from 'react';
import Carousel from '../Carousel';
import Slider from '../Slider';
import './../../css/App.css';

const Home = () => {
  useEffect(()=>{
    document.title = 'Home';
  },[]);

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
