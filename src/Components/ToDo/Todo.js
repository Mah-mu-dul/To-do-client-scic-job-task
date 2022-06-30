import React from "react";
import { AiFillDelete } from "react-icons/ai";

const Todo = () => {
  return (
    <div className=" min-h-[100px]  bg-none mb-20 pb-10 overflow-scroll max-h-screen">
      <h1 className="text-5xl text-center text-black p-5 lg:block  hidden">
        All Tasks is here
      </h1>
      <div className="lg:w-[80%] mt-5 border lg:mx-auto md:mx-auto p-5 mx-3   md:w-[80%] bg-[#0000000b] rounded-lg  min-h-[500px]">
        <h1 className="text-xl">
          <ul>
            <li >
              to call sakib
            </li>
            <li>gas off</li>
            <li>assignment ready</li>
            <li>to call sakib</li>
            <li>to call saymadeen </li>
          </ul>
        </h1>
      </div>
    </div>
  );
};

export default Todo;
