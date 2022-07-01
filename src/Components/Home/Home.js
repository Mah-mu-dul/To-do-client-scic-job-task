import React, { useRef } from "react";
import Todo from "../ToDo/Todo";
import todoimg from "../images/todo.jpg";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const taskNameRef = useRef("");
  const [user] = useAuthState(auth);

  const add = (event) => {
    event.preventDefault();
    let taskname = taskNameRef.current.value;
    const status = "incomplete";
    const email = user?.email;
    const taskDetais = {
      taskname: taskname,
      email: email,
      status: status,
    };
    console.log(taskDetais);

    fetch("http://localhost:5000/addtodo", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(taskDetais),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("task added sucessfully ");
        event.target.reset();
      });
  };
  return (
    <div className="h-screen bg-green-100 lg:flex md:flex justify-evenly">
      <div className="lg:w-[50%] mx-3 md:w-[40%]">
        <h2 className="text-3xl text-center">Add a task </h2>
        <div className="mx-auto">
          <form onSubmit={add} action="" className="mx-auto lg:ml-[95px]">
            <input
              ref={taskNameRef}
              name="task"
              type="text"
              className="input border-2 bg-[#e9e9e879] w-[70%]"
            />
            {user ? (
              <button className="btn ">Add</button>
            ) : (
              <button className=" btn"><Link to='login'>Login first</Link></button>
            )}
          </form>
          <div className=" hidden lg:block mt-10 ">
            <img className="w-[400px] mx-auto" src={todoimg} alt="" />
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
