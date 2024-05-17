import React from "react";


export default function Header() {
  return <div>
<header className="px-[30px] py-[10px] bg-slate-700 flex justify-between items-center">
  <div className="bg-slate-700">
  <img src="./src/assets/logo.png" alt="logo" className="w-[150px]"/>
  </div>

  <form action="">
    <input type="text" name="Search" placeholder="Search..." id="" className=" focus:outline-none bg-slate-600 p-2 w-[150px] lg:w-[200px] rounded-[50px] placeholder-slate-500 " />
  </form>
  <div>
    <ul className="flex gap-5">
      <li className="hover:text-slate-400 " >Home</li>
      <li className="hover:text-slate-400">About</li>
      <li className="hover:text-slate-400">Sign</li>
    </ul>
  </div>
</header>
  </div>;
}
