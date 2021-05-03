import React from 'react';
import MovieGridTabsContentRow from './MovieGridContentRow';

const MovieGridTabsContent = () => {
    return (
        <div className="tab-content" id="movietabsContent">
            <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
                <MovieGridTabsContentRow />
                <MovieGridTabsContentRow />
                <MovieGridTabsContentRow />
                <MovieGridTabsContentRow />
            </div>
            <div className="tab-pane fade" id="now-playing" role="tabpanel" aria-labelledby="now-playing-tab">
                <MovieGridTabsContentRow />
                <MovieGridTabsContentRow />
            </div>
            <div className="tab-pane fade" id="coming-soon" role="tabpanel" aria-labelledby="coming-soon-tab">
                <MovieGridTabsContentRow />
            </div>
        </div>
    );
}

export default MovieGridTabsContent;