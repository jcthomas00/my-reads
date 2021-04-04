import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import ShowBooks from './ShowBooks';
import { Link } from 'react-router-dom';

class Search extends Component {
    state = {
        searchTerm: '',
        searchResults: []
    }

    moveBook = (book, shelf) => {
        //call the parent's move function - for the DB update
        this.props.moveBook(book,shelf);
        //move the book in the search state
        this.setState((currentState)=>(currentState.searchResults.filter((currentBook)=> currentBook.id===book.id)[0].shelf=shelf));
    }

    search(searchTerm) {
        this.setState(() => ({searchTerm: searchTerm}));
        if (searchTerm !== ''){
            //serch for books via API
            BooksAPI.search(searchTerm).then((searchResults) => {
                if (searchResults && !searchResults.error){
                    //go through current shelf and match each book's shelf to the shelf of books in search results
                    this.props.books.forEach((book) => {
                        let bookMatch = searchResults.filter((resultItem) => book.id === resultItem.id);
                        if (bookMatch.length > 0) {
                            bookMatch[0].shelf = book.shelf
                        }
                    })
                }
                this.setState(() => ({searchResults: searchResults}));
            })
        }else {
            this.setState(() => ({searchResults: []}));
        }
    }

    render = () => (
        <div>
            <ul className="list-group">
                <li className="list-group-item">
                    <h1>Search</h1>
                    <form>
                        <input type="text" className="form-control" placeholder="Search for books" 
                            value={this.state.searchTerm} 
                            onChange={(e) => {this.search(e.target.value);}} 
                        />
                    </form>
                    <Link className="back-link" to="/">
                        <span className="material-icons">arrow_back_ios</span> Back to your shelf
                    </Link>
                </li>
                { this.state.searchResults.length > 0 && (
                    <li className="list-group-item">
                        <h2>SearchResults</h2>
                        <ShowBooks books={this.state.searchResults} moveBook={this.moveBook} shelves={this.props.shelves} />
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Search;