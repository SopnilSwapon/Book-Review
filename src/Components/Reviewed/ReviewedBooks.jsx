import { useLoaderData } from "react-router-dom";
import ReviewBook from "./ReviewBook";

const ReviewedBooks = () => {
    const reviewedBooks = useLoaderData();
    console.log(reviewedBooks);
    return (
        <div>
            <h2 className="text-5xl text-center font-bold mt-10">Some Reviewed Books</h2>
            {
                reviewedBooks.map(reviewedBook =><ReviewBook key={reviewedBook.bookId} reviewedBook={reviewedBook}></ReviewBook> )
            }
        </div>
    );
};

export default ReviewedBooks;