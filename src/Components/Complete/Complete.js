import React from 'react';

const Complete = () => {
    return (
      <div className=" min-h-[100px]  bg-none mb-20 bg-blue-100 pb-10 overflow-scroll max-h-screen">
        <h1 className="text-5xl text-center text-black p-5 lg:block  hidden">
          All Tasks is here
        </h1>
        <div className="lg:w-[80%] mt-5 border lg:mx-auto md:mx-auto p-5 mx-3   md:w-[80%] bg-[#0000000b] rounded-lg  min-h-[500px]">
          <h1 className="text-xl">
            <ul className='text-green-500'>
              <li>
                <del>to call sakib</del>
              </li>
              <li>
                <del>turn off the gas</del>
              </li>
              <li>
                <del>complete assignment</del>
              </li>
              <li>
                <del>read documentation</del>
              </li>
              <li>
                <del>to call sakib</del>
              </li>
              
            </ul>
          </h1>
        </div>
      </div>
    );
};

export default Complete;