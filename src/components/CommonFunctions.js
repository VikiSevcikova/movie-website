const categoryTitleHandler = (category) => {
    switch(category){
        case 'latest': return 'Latest';
        case 'now_playing': return 'Now Playing';
        case 'popular': return 'Popular';
        case 'top_rated': return 'Top Rated';
        case 'upcoming': return 'Upcoming';
        default: return '';
    }
}

export {categoryTitleHandler};