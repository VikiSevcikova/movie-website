import React from 'react';

const MoviesGridTabs = () => {
    return (
        <ul class="nav nav-tabs" id="movietabs" role="tablist">
        <li class="nav-item" role="movies">
            <button class="nav-link active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all" type="button" role="tab" aria-controls="all" aria-selected="true">All Movies</button>
        </li>
        <li class="nav-item" role="movies">
            <button class="nav-link" id="now-playing-tab" data-bs-toggle="tab" data-bs-target="#now-playing" type="button" role="tab" aria-controls="now-playinh" aria-selected="false">Now Playing</button>
        </li>
        <li class="nav-item" role="movies">
            <button class="nav-link" id="coming-soon-tab" data-bs-toggle="tab" data-bs-target="#coming-soon" type="button" role="tab" aria-controls="coming-soon" aria-selected="false">Coming Soon</button>
        </li>
        </ul>
    );
}

export default MoviesGridTabs;