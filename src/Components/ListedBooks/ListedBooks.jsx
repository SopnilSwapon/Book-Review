import { useEffect, useState } from "react";
import { getBook } from "../../utilities/utilities";
import ListedBook from "../ListedBook/ListedBook";

const ListedBooks = () => {
    const listedBookId = getBook();
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    },[])
    const listedBooks = books.filter(book=>listedBookId.includes(book.bookId));
    // console.log(listedBooks);
    // console.log(books);
    return (
        <div>
            <h3 className="text-5xl text-center font-bold p-8 mt-5 bg-gray-300 rounded-lg w-full">Books{listedBooks.length}</h3>
           <div >
           {
              listedBooks.map(listBook => <ListedBook key={listBook.bookId} listBook={listBook}></ListedBook>)
           }
           </div>
        </div>
    );
};

export default ListedBooks;