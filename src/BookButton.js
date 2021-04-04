//Functional component to display dropdown option for each book

const BookButton = (props) => (
    <button 
        onClick={ (e) => props.moveBook(props.book, props.shelf.shelfID) }
        className={props.book.shelf===props.shelf.shelfID ? "selected":""}
    >
        {props.shelf.shelfName}
    </button>
)

export default BookButton;