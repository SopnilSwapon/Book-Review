import Proptypes from 'prop-types';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { PiUsers } from "react-icons/pi";
import { GrNotes } from "react-icons/gr";
import { Link } from 'react-router-dom';
const WishlistBook = ({wishBook}) => {
    const { bookName, author, bookId, image, totalPages, rating, category, tags, publisher, yearOfPublishing } = wishBook;
    return (
        <div>
            <div className="card lg:card-side w-[500px] mx-auto md:w-full bg-base-100 shadow-xl p-10 mt-10 border border-gray-300">
                <figure className="w-full md:w-[30%] rounded-none  md:rounded-lg"><img src={image} alt="Album" /></figure>
                <div className="card-body ml-5">
                    <div className="p-5">
                        <h2 className="text-4xl font-bold my-3">{bookName}</h2>
                        <p>By: {author}</p>
                        <div className='flex flex-col mg:flex-row gap-5'>
                            <div className='flex gap-2 md:gap-10 my-3'><span className="font-bold mt-3">Tags:</span>
                                {
                                    tags.map((hash, idx) => <li className='list-none' key={idx}><button className='btn text-[#17BE0A] bg-gray-200 font-bold'>#{hash}</button></li>)
                                }
                            </div>
                            <p className='flex items-center gap-1'><HiOutlineLocationMarker></HiOutlineLocationMarker>Year Of Publishing : {yearOfPublishing}</p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2">
                            <p className='flex items-center gap-0 md:gap-3'><PiUsers></PiUsers> Publisher : {publisher}</p>
                            <p className='flex items-center gap-0 md:gap-3'><GrNotes></GrNotes> page : {totalPages}</p>
                        </div>
                        <hr className="border w-full my-3" />
                        <div className='flex flex-col md:flex-row gap-4 md:gap-4'>
                            <button className='btn bg-blue-100 rounded-full text-blue-500 font-bold'>Category: {category}</button>
                            <button className='btn bg-red-100 rounded-full text-yellow-600 font-bold'>Rating {rating}</button>
                            <button className='btn bg-[#17BE0A] rounded-full text-gray-200 font-bold'><Link to={`/bookDetails/${bookId}`}>View Details</Link></button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};
WishlistBook.propTypes = {
    wishBook: Proptypes.object
}
export default WishlistBook;