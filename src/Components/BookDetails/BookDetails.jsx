import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const bookIntId = parseInt(bookId);
    const book = books.find(book => book.bookId === bookIntId);
    const { bookName, author, image, review, totalPages, category, tags, publisher, yearOfPublishing } = book;
    console.log(book);
    return (
        <div className="flex gap-10 mt-20 items-center">
            <div className="w-[650px] ">
                <img src={image} alt="" />
            </div>
            <div className="p-5">
                <h2 className="text-4xl font-bold my-3">{bookName}</h2>
                <p>By: {author}</p>
                <hr className="border w-full my-3" />
                <p>{category}</p>
                <hr className="border w-full my-3" />
                <p><span className="font-bold">Review:</span> {review}</p>
                <div className='flex gap-10 my-3'><span className="font-bold mt-3">Tags:</span>
                    {
                        tags.map((hash, idx) => <li className='list-none' key={idx}><button className='btn text-[#17BE0A] bg-gray-200 font-bold'>#{hash}</button></li>)
                    }
                </div>
                <hr className="border w-full" />
               <div className="flex gap-10">
               <p>Number of Page:</p>
               <p>{totalPages}</p>
               </div>
               <div className="flex gap-10 my-3">
               <p>Publisher:</p>
               <p>{publisher}</p>
               </div>
               <div className="flex gap-10">
               <p>Year of Publisher:</p>
               <p>{yearOfPublishing}</p>
               </div>
               <div className="flex gap-10 my-3">
               <button className="btn bg-white border-gray-400  text-black font-bold">Read</button>
               <button className="btn bg-sky-500 text-white font-bold">Wishlist</button>
               </div>
               </div>
               
        </div>
    );
};

export default BookDetails;