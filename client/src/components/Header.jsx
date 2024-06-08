import React from "react";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";


export default function Header() {
  const {currentUser} = useSelector(state => state.user);
  return <div>
<header className="px-[30px] py-[10px] bg-gray-10 flex justify-between items-center font-urbanist">
  <div className="">
  <Link to="/"><img src="./src/assets/logo.png" alt="logo" className="w-[150px]"/></Link>
  </div>

  <form action="">
    <input type="text" name="Search" placeholder="Search..." id="" className="border border-gray-15  focus:outline-none bg-gray-08 p-2 w-[150px] lg:w-[200px] rounded-[10px] placeholder-slate-500 " />
  </form>
  <div>
    <ul className="flex gap-5  text-white ">
      <li className="hover:text-gray-20"><Link to="/">Home</Link></li>
      <li className="hover:text-gray-20"><Link to="/about">About</Link></li>
      <li className="hover:text-gray-20"><Link to={currentUser ? "/profile" : "/sign-in"}>
      {currentUser ? (<img className="h-auto rounded-[50px] w-[30px] relative  transition-all duration-300 cursor-pointer filter blur hover:blur-0" src={currentUser.avatar} alt="Profile Picture"/>) : "SignIn"}
      </Link></li>
    </ul>
  </div>
</header>
  </div>;
}
