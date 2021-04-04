import BookButton from './BookButton';

//Functional Component to display a grid of books
const ShowBooks = (props) => {
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                {props.books.map((book) => (
                    <div className="col" key={book.id}>
                        <div className="card shadow-sm h-100">
                            {book.imageLinks && (
                                //display image if thumbnail exists
                                <img className="card-img-top"  src={book.imageLinks.thumbnail} alt={`Cover of ${book.title}`} />
                            )}
                            <div className="dropdown">
                                <span className="material-icons">
                                    arrow_drop_down
                                </span>
                                <div className="dropdown-content">
                                    <button className="disabled" disabled>Move to...</button>
                                    {props.shelves.map((shelf) => (
                                        //load dropdown options for each book
                                        <BookButton key={shelf.shelfID} moveBook={props.moveBook} book={book} shelf={shelf} />
                                    ))}
                                </div>
                            </div>
                            <div className="card-body">
                                <p className="card-text">{`${book.title}`}
                                    <span className="authors">{book.authors && book.authors.map((author,i)=>{
                                        //list out authors and add commas if there are multiple authors
                                        return book.authors.length === i+1 && book.authors.length > 1 ? `, ${author}`:`${author}`
                                    })}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShowBooks;