import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    const [searchValue, setSearchValue] = useState('');
    
    const inputChangeHandler = (e) => {
        setSearchValue(e.target.value);
    }
    
    return(
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link to='/' className="navbar-brand logo"><i className='fa fa-kiwi-bird'></i> Movie</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/category/now_playing' className="nav-link">Now Playing</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/category/popular' className="nav-link">Popular</Link>
                            </li> 
                            <li className="nav-item">
                                <Link to='/category/top_rated' className="nav-link">Top Rated</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/category/upcoming' className="nav-link">Upcoming</Link>
                            </li>
                        </ul>
                        <form action={`/search/${searchValue}`} className="d-flex">
                            <input onChange={inputChangeHandler} className="form-control bg-dark me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary" type="submit"><i className="fas fa-search"></i></button>
                        </form>
                    </div>
                </div>
            </nav>
    );
};

export default Navbar;
 