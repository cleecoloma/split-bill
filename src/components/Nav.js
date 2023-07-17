import React from 'react';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';

function Nav() {
  return (
    <div className=" bg-slate-100 flex justify-between px-6 py-3">
      <div className=" bg-yellow-400 text-white flex justify-center items-center p-2 rounded-xl">
        <FaArrowRightArrowLeft />
        <h1 className="text-2xl ps-3">splitbill</h1>
      </div>
      <div className="flex justify-center items-center">
        <a
          href="#"
          className="bg-gray-300 text-white rounded-3xl text-xl mx-1 px-3 py-2 transition-all duration-300 hover:rounded-lg"
        >
          Demo
        </a>
        <a
          href="#"
          className="bg-gray-300 text-white rounded-3xl text-xl ms-1 px- p-2 transition-all duration-300 hover:rounded-lg"
        >
          Sign In
        </a>
      </div>
    </div>
  );
}

export default Nav;
