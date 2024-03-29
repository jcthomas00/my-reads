import PropTypes from 'prop-types';

//Functional component to display dropdown option for each book
const BookButton = ({ moveBook, book, shelf }) => {
    //add selected classes for the book and mark 'none' as selected if book is not in a shelf
    let buttonClasses = book.shelf === shelf.shelfID ? "selected":"";
    buttonClasses += (!book.shelf || book.shelf==='none') && (shelf.shelfID) === 'none' ? "selected":"";

    return (<button 
        onClick={ (e) => moveBook(book, shelf.shelfID) }
        className={buttonClasses}
    >
        {shelf.shelfName}
    </button>
    )
}

BookButton.propTypes = {
    moveBook: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired,
    shelf: PropTypes.object.isRequired
}

export default BookButton;