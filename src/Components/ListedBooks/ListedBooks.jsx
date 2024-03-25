import { useEffect, useState } from "react";
import { getBook } from "../../utilities/utilities";

const ListedBooks = () => {
    const listedBookId = getBook();
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    },[])
    const listedBook = books.filter(book=>listedBookId.includes(book.bookId));
    console.log(listedBook);
    // console.log(books);
    return (
        <div>
            <h3>Listed books</h3>
        </div>
    );
};

export default ListedBooks;