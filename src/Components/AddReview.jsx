import banner from '../assets/download.jpg';
import banner2 from '../assets/images.jpg';
import bnner3 from '../assets/hqdefault.jpg';
import banner4 from '../assets/finalbnne.png'
const AddReview = () => {
    return (
        <div>
            <h2 className='text-4xl text-center mt-7 mb-4 font-bold'>Give Review Your Favorite Book</h2>
            <p className='mx-6'>A book review is a concise evaluation of a literary work, summarizing its content and offering critical analysis or personal opinion. It provides readers with insights into the book's strengths, weaknesses, and overall impact, helping them make informed decisions about reading it.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-7'>
                <div className="card bg-base-100 shadow-xl">
                    <div className="p-5 rounded w-full">
                        <figure>
                            <img src={banner} alt="" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Himu!</h2>
                            <p>
                                Himu books, penned by the renowned Bangladeshi author Humayun Ahmed, offer readers a captivating glimpse into the life and adventures of Himu, a philosophical and unconventional. </p>
                            <div className="card-actions">
                                <button className="btn bg-gray-400 text-white font-bold">Give Review</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="p-5 rounded w-full">
                        <figure>
                            <img src={banner2} alt="" />
                        </figure>
                    </div>
                    <div className="card-body items-center text-center">
                            <h2 className="card-title">Shuvro Series!</h2>
                            <p>
                                Shuvro series books, penned by the renowned Bangladeshi author Humayun Ahmed. </p>
                            <div className="card-actions">
                                <button className="btn bg-gray-400 text-white font-bold">Give Review</button>
                            </div>
                        </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="p-5 rounded w-full">
                        <figure>
                            <img src={bnner3} alt="" />
                        </figure>
                    </div>
                    <div className="card-body items-center text-center">
                            <h2 className="card-title">ParaPar!</h2>
                            <p>
                                ParaPar books, Opening by the renowned Bangladeshi author Humayun Ahmed, offer readers a captivating glimpse into the life and adventures of Himu, a philosophical and unconventional character. </p>
                            <div className="card-actions">
                                <button className="btn bg-gray-400 text-white font-bold">Give Review</button>
                            </div>
                        </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="p-5 rounded w-full">
                        <figure>
                            <img src={banner4} alt="" />
                        </figure>
                    </div>
                    <div className="card-body items-center text-center">
                            <h2 className="card-title">Cover Book!</h2>
                            <p>
                                Cover books, Starting by the renowned Bangladeshi author Humayun Ahmed. </p>
                            <div className="card-actions">
                                <button className="btn bg-gray-400 text-white font-bold">Give Review</button>
                            </div>
                        </div>
                </div>
            </div>
            <h2 className='text-2xl font-bold text-center mt-8 mb-3'>Fill Up The Form to Give Review</h2>
            <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                    <div className="py-6 md:py-0 md:px-6">
                        <h1 className="text-2xl font-bold text-center">Receving Area</h1>
                        <p className="pt-2 pb-4">Fill in the form to start a review</p>
                        <div className="space-y-4">
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Our address, 9999 City Dhaka,Bangladesh</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                                <span>123456789</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <span>contact@review.com</span>
                            </p>
                        </div>
                    </div>
                    <form novalidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                        <label className="block">
                            <span className="mb-1">Full name</span>
                            <input type="text" placeholder="type your name" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Email address</span>
                            <input type="email" placeholder="type your email" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Book Name</span>
                            <input type="email" placeholder="book name" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Review</span>
                            <textarea rows="3" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-300 border border-gray-300"></textarea>
                        </label>
                        <button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-gray-300 font-bold dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600">Submit</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default AddReview;