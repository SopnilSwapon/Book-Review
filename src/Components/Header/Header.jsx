import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const lists = <>
    <li><NavLink to='/'>Home</NavLink ></li>
      <li><NavLink to='/listed'>Listed Book</NavLink ></li>
      <li><NavLink to='/pages'>Pages To Read</NavLink ></li>
      <li><NavLink to='/reviewed'>Reviewed Books</NavLink ></li>
      <li><NavLink to='/addReview'>Add Review</NavLink ></li>
      
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {lists}
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl font-bold">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-bold">
      {lists}
    </ul>
  </div>
  <div className="navbar-end flex gap-4">
    <Link to='/register'><button className="btn bg-[#17BE0A] text-white">Sign Up</button></Link>
    <button className="btn bg-[#59C6D2] text-white">Sign In</button>
  </div>
</div>
        </div>
    );
};

export default Header;