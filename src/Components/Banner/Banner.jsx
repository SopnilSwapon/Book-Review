import bannerPic from '../../assets/tablet-books-arrangement-side-view_23-2149765710.jpg'
const Banner = () => {
    return (
        <div className="bg-gray-200 rounded-lg">
           <div className='flex items-center'>
           <div className='w-full'>
           <h2 className="text-5xl text-center flex items-center justify-center">Books to freshen <br />up your bookshelf</h2> 
           <div className="flex justify-center">
           <button className="btn bg-[#17BE0A] text-white mt-10">View The List</button>
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