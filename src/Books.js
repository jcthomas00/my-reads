import React, { Component } from "react";
import * as BooksAPI from './BooksAPI.js';
import Shelves from "./Shelves.js";
import { Route } from 'react-router-dom';
import Search from './Search';

class Books extends Component {
    state = {
        books: []
    }

    //shelf names to show in dropdowns and book sections
    shelves = [
        {shelfID: "currentlyReading", shelfName: "Currently Reading"},
        {shelfID: "wantToRead", shelfName: "Want To Read"},
        {shelfID: "read", shelfName: "Read"},
        {shelfID: "none", shelfName: "None"} 
    ];

    //move book in DB and refresh books in state
    moveBook = async (book, shelf) => {
        const result = await BooksAPI.update(book,shelf);
        if (result){
            this.fetchBooks();
        }
    }

    //grab books from DB and update state
    fetchBooks = async () => {
        const books = await BooksAPI.getAll();
        this.setState(()=>({books: books}))
        // Code before async await for reference
        // BooksAPI.getAll().then((books) => {
        //   this.setState(()=>({books: books}));
        // });
    }

    //initial loading of books
    componentDidMount = () => {
        this.fetchBooks();
    }

    render = () => (
        <div>
            <Route exact path="/">
                <Shelves books={this.state.books} moveBook={this.moveBook} shelves={this.shelves} />
            </Route>
            <Route path="/search">
                <Search books={this.state.books} moveBook={this.moveBook} shelves={this.shelves} />
            </Route>
       </div> 
    );
}

export default Books;