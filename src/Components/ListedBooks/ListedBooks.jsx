import { useEffect, useState } from "react";
import { getBook } from "../../utilities/utilities";
import ListedBook from "../ListedBook/ListedBook";

const ListedBooks = () => {
    const listedBookId = getBook();
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])
    const listedBooks = books.filter(book => listedBookId.includes(book.bookId));
    return (
        <div>
            <h3 className="text-5xl text-center font-bold p-8 mt-5 bg-gray-300 rounded-lg w-full">Books{listedBooks.length}</h3>
            <div role="tablist" className="tabs tabs-lifted mt-10">
                <input type="radio" name="my_tabs_2" role="tab" className="tab font-medium text-gray-500" aria-label="ReadBooks" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                <div >
                        {
                            listedBooks.map(listBook => <ListedBook key={listBook.bookId} listBook={listBook}></ListedBook>)
                        }
                    </div>
                </div>
                <input type="radio" name="my_tabs_2" role="tab" className="tab font-medium text-gray-500" aria-label="WishlistBooks" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <h2>Wish List books coming soon</h2>
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;