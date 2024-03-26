import { useEffect, useState } from "react";
import {getReadBook, getWishBook } from "../../utilities/utilities";
import ReadListedBook from "../ListedBook/ReadListedBook";
import WishlistBook from "../WishlistBook/WishlistBook";

const ListedBooks = () => {
    const listedBookId = getReadBook();
    const wishListBookId = getWishBook();
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])
    const listedBooks = books.filter(book => listedBookId.includes(book.bookId));
    const wishesBooks = books.filter(book => wishListBookId.includes(book.bookId));
    // console.log(wishesBooks);
    return (
        <div>
            <h3 className="text-5xl text-center font-bold p-8 mt-5 bg-gray-300 rounded-lg w-full">Books{listedBooks.length}</h3>
            <div role="tablist" className="tabs tabs-lifted mt-10">
                <input type="radio" name="my_tabs_2" role="tab" className="tab font-medium text-gray-500" aria-label="ReadBooks" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                <div >
                        {
                            listedBooks.map(listBook => <ReadListedBook key={listBook.bookId} listBook={listBook}></ReadListedBook>)
                        }
                    </div>
                </div>
                <input type="radio" name="my_tabs_2" role="tab" className="tab font-medium text-gray-500" aria-label="WishlistBooks" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    
                    <div>
                        {
                            wishesBooks.map(wishBook => <WishlistBook key={wishBook.bookId} wishBook={wishBook}></WishlistBook>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;