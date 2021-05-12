import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {categoryTitleHandler} from '../components/CommonFunctions';
import MovieCard from '../components/MovieCard';
import API_KEY from '../key';
import '../css/App.css';

const ResultPage = () => {
    const [results, setResults] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [totalResults, setTotalResults] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const { category, query } = useParams();

    useEffect(()=>{
        document.title = 'Results';
      },[]);

    useEffect(() => {
        setResults([]);
        setCurrentPage(1);
        setTotalResults(0);
        setTotalPages(0);
        if(query === undefined && category === undefined) return;
        //this is the case when the user click on new category page
        if(currentPage === 1){
            getResults();
        }
    }, [category,query]);

    //when the user click show more button
    useEffect(() => {
        if(query === undefined && category === undefined) return;
        getResults();
    }, [currentPage]);

    const getResults = () => {
        let url;
        if(query || !category){
            url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}&language=en-US&page=${currentPage}`
        }else{
            url = `https://api.themoviedb.org/3/movie/${category ? category : ''}?api_key=${API_KEY}&language=en-US&page=${currentPage}`
        }
        console.log(url);
        fetch(url)
        .then(response => {
            if(response.status !== 200){
                console.log('There is an issue. Status code:' + response.status);
                return;
            }
            return response.json();
        })
        .then(data => {
            if(data && data.results){
                if(currentPage === 1){
                    setResults(data.results);
                    setTotalPages(data.total_pages);
                    setTotalResults(data.total_results);
                }else{
                    setResults([...results, ...data.results]);
                }
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    const showMoreHandler = () => {
        if(currentPage < totalPages){
            setCurrentPage(currentPage+1);
        }
    }

    return (
        <>
            <div className='container content'>
               
                    <div className="row movie-grid">
                        {results.length !== 0 ?
                            <>
                            <h2 className='title'>
                                {`Results for ${category ? categoryTitleHandler(category) : "'"+query+"'"}`}
                            </h2>
                            {results.map((result) => (
                                <MovieCard key={result.id} movie={result}/>
                            ))}
                            {currentPage < totalPages &&
                                <div onClick={showMoreHandler} className="show-more btn btn-primary col-12">
                                    Show More
                                </div>
                            }
                            </>
                            :  
                            <h2 className='title'>
                               No results, please enter search value...
                            </h2>
                        }
                    </div>
            </div>
        </>
    );
}

export default ResultPage;
