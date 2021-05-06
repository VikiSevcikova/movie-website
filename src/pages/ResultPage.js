import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {categoryTitleHandler} from '../components/CommonFunctions';
import API_KEY from '../key';
import '../scss/App.scss';
import MovieCard from '../components/MovieCard';

const ResultPage = () => {
    const [results, setResults] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const { category, query } = useParams();

    const getResults = () => {
        let url;
        if(query || !category){
            url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}&language=en-US&page=${currentPage}`
        }else{
            url = `https://api.themoviedb.org/3/movie/${category ? category : ''}?api_key=${API_KEY}&language=en-US&page=${currentPage}`
        }
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
                }else{
                    setResults([... results, ...data.results]);
                }
                setTotalPages(data.total_pages);
                setTotalResults(data.total_results);
            }else{
                setResults([data]);
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

    useEffect(() => {
        console.log('category change');
        if(query === undefined && category === undefined) return;
        setResults([]);
        setCurrentPage(1);
        //this is the case when the user click on new category page
        if(currentPage === 1){
            getResults();
        }
    }, [category]);

    //when the user click show more button
    useEffect(() => {
        console.log('current page change');
        if(query === undefined && category === undefined) return;
        getResults();
    }, [currentPage]);

    return (
        <>
            <div className='container content'>
                <div className="row movie-grid">
                    <h2 className='title'>
                        {results && (query || results) ? `Found ${totalResults} results for ${category ? categoryTitleHandler(category) : "'"+query+"'"}` : "No Results"}
                    </h2>
                    {results.map((result) => (
                        <MovieCard key={result.id} movie={result}/>
                    ))}
                    {currentPage < totalPages ? 
                        <div onClick={showMoreHandler} className="show-more btn btn-primary col-12">
                            Show More
                        </div>
                     : ''}
                </div>
            </div>
        </>
    );
}

export default ResultPage;
