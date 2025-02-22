import { useEffect, useState } from "react";
import { getReadBook, getWishBook } from "../../utilities/utilities";
import ReadListedBook from "../ListedBook/ReadListedBook";
import WishlistBook from "../WishlistBook/WishlistBook";
import { FaSort } from "react-icons/fa6";
import { Link } from "react-router-dom";
const ListedBooks = () => {
    const listedBookId = getReadBook();
    const wishListBookId = getWishBook();
    const [books, setBooks] = useState([]);
    const [ratingBooks , setRatingBooks] = useState([]);
    const [bookPages, setBookPages] = useState([]);
    const [publishedYear, setPublishedYear] = useState([]);
    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])
    const handleSortRating = () =>{
        const sortedListBooks = books.sort((a, b) =>(a.rating < b.rating) ? 1 : (a.rating > b.rating) ? -1 : 0);
        setRatingBooks(sortedListBooks);
        const ratingSection = document.getElementById('rating');
        const bookSection = document.getElementById('orginal');
        const bookPageSection = document.getElementById('bookpage');
        const publishedYearSection = document.getElementById('published-year');
        publishedYearSection.classList.add('hidden');
        bookSection.classList.add('hidden');
        ratingSection.classList.remove('hidden');
        bookPageSection.classList.add('hidden');
           
    }
    const handleSortBookPage = () => {
        const sortedListBooksPages = books.sort((a, b) =>(a.totalPages < b.totalPages) ? 1 : (a.totalPages > b.totalPages) ? -1 : 0);
        setBookPages(sortedListBooksPages);
        const ratingSection = document.getElementById('rating');
        const bookSection = document.getElementById('orginal');
        const bookPageSection = document.getElementById('bookpage');
        const publishedYearSection = document.getElementById('published-year');
        publishedYearSection.classList.add('hidden');
        bookSection.classList.add('hidden');
        ratingSection.classList.add('hidden');
        bookPageSection.classList.remove('hidden');
    }
    const handleSortPublishedYear = () => {
        const sortedListPublishedYear = books.sort((a, b) =>(a.yearOfPublishing < b.yearOfPublishing) ? 1 : (a.yearOfPublishing > b.yearOfPublishing) ? -1 : 0);
        setPublishedYear(sortedListPublishedYear);
        const ratingSection = document.getElementById('rating');
        const bookSection = document.getElementById('orginal');
        const bookPageSection = document.getElementById('bookpage');
        const publishedYearSection = document.getElementById('published-year');
        publishedYearSection.classList.remove('hidden');
        bookSection.classList.add('hidden');
        ratingSection.classList.add('hidden');
        bookPageSection.classList.add('hidden');
    }
    const listedBooks = books.filter(book => listedBookId.includes(book.bookId));
    const wishesBooks = books.filter(book => wishListBookId.includes(book.bookId));
    const decendingRatingBooks = ratingBooks.filter(book => listedBookId.includes(book.bookId));
    const decendingBookPages = bookPages.filter(book => listedBookId.includes(book.bookId));
    const decendingPublishedYear = publishedYear.filter(book => listedBookId.includes(book.bookId));
    // console.log(decendingPublishedYear);
    

    return (
        <div>
            <h3 className="text-xl md:text-5xl text-center md:text-center font-bold p-8 mt-5 rounded-lg w-full mx-auto">Reads & Wishes Books</h3>
            <div className="w-[100px] mx-auto mt-5">
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1 bg-green-400 text-white">Sort By<FaSort></FaSort></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow  rounded-box w-52">
                        <li onClick={()=>handleSortRating()}><Link >Rating</Link></li>
                        <li onClick={()=>handleSortBookPage()}><Link>Number of Pages</Link></li>
                        <li onClick={()=>handleSortPublishedYear()}><Link>Published Year</Link></li>
                    </ul>
                </div>
            </div>
            <div role="tablist" className="tabs tabs-lifted mt-10">
                <input type="radio" name="my_tabs_2" role="tab" className="tab font-medium text-gray-500" aria-label="ReadBooks" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <div id="rating" className="hidden">
                        {
                            decendingRatingBooks.map(listBook => <ReadListedBook key={listBook.bookId} listBook={listBook}></ReadListedBook>)
                        }
                    </div>
                    <div id="bookpage" className="hidden">
                        {
                            decendingBookPages.map(listBook => <ReadListedBook key={listBook.bookId} listBook={listBook}></ReadListedBook>)
                        }
                    </div>
                    <div id="published-year" className="hidden">
                        {
                            decendingPublishedYear.map(listBook => <ReadListedBook key={listBook.bookId} listBook={listBook}></ReadListedBook>)
                        }
                    </div>
                    <div id="orginal">
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