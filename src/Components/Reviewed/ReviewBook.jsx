import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import PropTypes from 'prop-types';

const ReviewBook = ({ reviewedBook }) => {
    const { bookName, author, image, review, rating, tags, } = reviewedBook;
    return (
        <div>
            <div>
                <div className="card lg:card-side bg-base-100 border border-gray-400 shadow-xl flex justify-between my-10">
                    <div className="border flex-grow w-full border-gray-300 m-5 rounded-lg">
                    <figure><img src={image} alt="Album" /></figure>
                    </div>
                    <div className=" justify-center p-10 flex card">
                        <h2 className="text-4xl text-center font-bold mb-5">{bookName}</h2>
                        <p><span className="font-bold">Review:</span> {review}</p>
                        <div className='flex gap-10 my-2'>
    {
        tags.map((hash,idx)=><li className='list-none' key={idx}><button className='btn bg-green-300 text-blck  font-bold'># {hash}</button></li>)
    }
    </div>
                        <p className="flex gap-1 items-center">Ratings: <MdOutlineStarBorderPurple500></MdOutlineStarBorderPurple500> {rating}</p>
                        <p className=" font-bold flex justify-end">Author: {author}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
ReviewBook.propTypes = {
    reviewedBook: PropTypes.object
}
export default ReviewBook;