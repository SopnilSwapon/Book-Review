import PropTypes from 'prop-types';
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    
    const {bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = book;
    return (
        <Link to={`/bookDetails/${bookId}`}>
        <div >
            <div className="card bg-base-100 shadow-xl h-96 mt-7">
  <figure className="px-10 pt-10">
    <img width="100%" src={image} alt="book" className="rounded-xl" />
  </figure>
  <div className="card-body items-center">
    <div className='flex gap-10'>
    {
        tags.map((hash,idx)=><li className='list-none' key={idx}><button className='btn text-[#17BE0A] bg-gray-200 font-bold'>{hash}</button></li>)
    }
    </div>
    <h2 className="card-title">{bookName}</h2>
    <p>By: {author}</p>
    <hr className='border w-full' />
    <div className='flex gap-20'>
        <p>{category}</p>
        <p className='flex items-center'>{rating} <MdOutlineStarBorderPurple500></MdOutlineStarBorderPurple500></p>
    </div>
  </div>
</div>
        </div>
        </Link>
    );
};
Book.propTypes = {
    book: PropTypes.object
}
export default Book;