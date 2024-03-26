import { Link } from 'react-router-dom';
import bannerPic from '../../assets/tablet-books-arrangement-side-view_23-2149765710.jpg'
const Banner = () => {
    return (
        <div className="bg-gray-200 rounded-lg">
           <div className='flex flex-col md:flex-row items-center'>
           <div className='w-full'>
           <h2 className="text-5xl text-center mt-10 md:mt-0 flex items-center justify-center">Books to freshen <br />up your bookshelf</h2> 
           <div className="flex justify-center">
           <Link to='/listed'><button className="btn bg-[#17BE0A] text-white mt-10 mb-5">View The List</button></Link>
           </div>
           </div>
           <div className='w-full'>
            <img src={bannerPic} alt="" />
           </div>
           </div>
        </div>
    );
};

export default Banner;