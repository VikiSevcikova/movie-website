import React, {useState} from 'react';
import {Link, withRouter, useHistory} from 'react-router-dom';

const Navbar = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    const [searchValue, setSearchValue] = useState('');
    const history = useHistory();

    const inputChangeHandler = (e) => {
        setSearchValue(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setIsNavCollapsed(!isNavCollapsed);
        document.querySelector('.form-control').value = '';
        setSearchValue('');
        history.push(`/search/${searchValue}`);
    }

    return(
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link to='/' className="navbar-brand logo"><i className='fa fa-kiwi-bird'></i> Movie</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`navbar-collapse ${isNavCollapsed ? 'collapse' : ''}`} id="navbarSupportedContent" toggle="collapse" data-target=".navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active" aria-current="page" onClick={handleNavCollapse} >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/category/now_playing' className="nav-link" onClick={handleNavCollapse} >Now Playing</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/category/popular' className="nav-link" onClick={handleNavCollapse} >Popular</Link>
                            </li> 
                            <li className="nav-item">
                                <Link to='/category/top_rated' className="nav-link" onClick={handleNavCollapse} >Top Rated</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/category/upcoming' className="nav-link" onClick={handleNavCollapse}>Upcoming</Link>
                            </li>
                        </ul>
                        <form onSubmit={submitHandler} className="d-flex">
                            <input onChange={inputChangeHandler} className="form-control bg-dark me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary" type="submit"><i className="fas fa-search"></i></button>
                        </form>
                    </div>
                </div>
            </nav>
    );
};

export default withRouter(Navbar);
 