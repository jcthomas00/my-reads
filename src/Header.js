import React from 'react';
import { Link } from 'react-router-dom';

//Functional component that houses the top of the site
const Header = () => (
    <header>
        <div className="navbar navbar-dark bg-dark shadow-sm">
            <div className="container">
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <span className="small-icon material-icons">auto_stories</span>
                    <strong>Jacob's Book Tracker</strong>
                </Link>
            </div>
        </div>
    </header>
)

export default Header;