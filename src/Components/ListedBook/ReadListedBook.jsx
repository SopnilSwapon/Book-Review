import PropTypes from 'prop-types';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { PiUsers } from "react-icons/pi";
import { GrNotes } from "react-icons/gr";
import { Link } from 'react-router-dom';

const ReadListedBook = ({ listBook }) => {
    const { bookName, author, image, bookId, totalPages, rating, category, tags, publisher, yearOfPublishing } = listBook;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl p-10 mt-10 border border-gray-300">
                <figure className="w-full md:w-[30%] rounded-none  md:rounded-lg"><img src={image} alt="Album" /></figure>
                <div className="card-body ml-5">
                    <div className="p-5">
                        <h2 className="text-4xl font-bold my-3">{bookName}</h2>
                        <p>By: {author}</p>
                        <div className='flex gap-5'>
                            <div className='flex gap-10 my-3'><span className="font-bold mt-3">Tags:</span>
                                {
                                    tags.map((hash, idx) => <li className='list-none' key={idx}><button className='btn text-[#17BE0A] bg-gray-200 font-bold'>#{hash}</button></li>)
                                }
                            </div>
                            <p className='flex items-center gap-1'><HiOutlineLocationMarker></HiOutlineLocationMarker> Year Of Publishing : {yearOfPublishing}</p>
                        </div>
                        <div className="flex">
                            <p className='flex items-center gap-3'><PiUsers></PiUsers> Publisher : {publisher}</p>
                            <p className='flex items-center gap-3'><GrNotes></GrNotes> page : {totalPages}</p>
                        </div>
                        <hr className="border w-full my-3" />
                        <div className='flex gap-4'>
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
ReadListedBook.propTypes = {
    listBook: PropTypes.object
}
export default ReadListedBook;