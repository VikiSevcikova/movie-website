import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const categoryTitleHandler = (category) => {
    switch(category){
        case 'latest': return 'Latest';
        case 'now_playing': return 'Now Playing';
        case 'popular': return 'Popular';
        case 'top_rated': return 'Top Rated';
        case 'upcoming': return 'Upcoming';
        case 'similar': return 'Related Movies';
        default: return '';
    }
}

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export {categoryTitleHandler, ScrollToTop};