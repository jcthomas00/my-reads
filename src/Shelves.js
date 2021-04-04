import React from "react";
import ShowBooks from "./ShowBooks.js";
import { Link } from 'react-router-dom';
 
//Functional Component to display books by shelf
const Shelves = (props) => {
    return (
        <ul className="list-group">
            <Link to="/search" ><span className="material-icons" id="search-button">add</span></Link>
            {props.shelves.filter((shelf) => (shelf.shelfID !== 'none')).map((shelf) => (
                <li className="list-group-item" key={shelf.shelfID}>
                    <h2>{shelf.shelfName}</h2>
                    <ShowBooks 
                        moveBook={props.moveBook} 
                        shelves={props.shelves} 
                        books={props.books.filter((book) => (book.shelf===shelf.shelfID))} 
                    />   
                </li>
            ))}
        </ul>
    )
}

export default Shelves;