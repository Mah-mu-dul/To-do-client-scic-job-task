import React from 'react';
import Todo from '../ToDo/Todo';
import todoimg from'../images/todo.jpg'

const Home = () => {
    return (
      <div className="h-screen bg-green-100 lg:flex md:flex justify-evenly">
        <div className="lg:w-[50%] mx-3 md:w-[40%]">
          <h2 className="text-3xl text-center">Add a task</h2>
          <div className="mx-auto">
            <form action="" className="mx-auto lg:ml-[95px]">
              <input
                name="task"
                type="text"
                className="input border-2 bg-[#e9e9e879] w-[70%]"
              />
              <input
                name="submit"
                type="button"
                className="btn mt-10 mx-5"
                value="add"
              />
            </form>
            <div className=" hidden lg:block mt-10 ">
              <img className='h-[500px] mx-auto' src={todoimg} alt="" />
            </div>
          </div>
        </div>
        <div className="lg:w-[45%] md:w-[60%]">
          <Todo />
        </div>
      </div>
    );
};

export default Home;