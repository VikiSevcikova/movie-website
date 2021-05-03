import React from 'react';
import Slider from './Slider';

const MovieGrid = () => {
    return (
        <div className="row">
            <div className='slider-wrap'>
                <h1>Latest</h1>
                <Slider category='latest'/>
            </div>
            <div className='slider-wrap'>
                <h1>Now Playing</h1>
                <Slider category='now_playing'/>
            </div>
            <div className='slider-wrap'>
                <h1>Popular</h1>
                <Slider category='popular'/>
           
                <Slider category='top_rated'/>
            </div>
            <div className='slider-wrap'>
                <h1>Up Coming</h1>
                <Slider category='upcoming'/>
            </div>
        </div>
    );
}

export default MovieGrid;