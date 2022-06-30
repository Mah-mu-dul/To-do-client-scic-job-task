import React from 'react';

const Home = () => {
    return (
      <div className="h-[700px] bg-blue-50">
        <h1 class="text-3xl font-bold text-red-400 text-center">
          Hello world!
        </h1>{" "}
        <button class="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
          Button
        </button>
      </div>
    );
};

export default Home;