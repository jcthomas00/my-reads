//Functional component to display dropdown option for each book

const BookButton = (props) => {
    //add selected classes for the book and mark 'none' as selected if book is not in a shelf
    let buttonClasses = props.book.shelf === props.shelf.shelfID ? "selected":"";
    buttonClasses += (!props.book.shelf || props.book.shelf==='none') && (props.shelf.shelfID) === 'none' ? "selected":"";

    return (<button 
        onClick={ (e) => props.moveBook(props.book, props.shelf.shelfID) }
        className={buttonClasses}
    >
        {props.shelf.shelfName}
    </button>
    )
}

export default BookButton;