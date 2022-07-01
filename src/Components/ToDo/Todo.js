import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiFillDelete } from "react-icons/ai";
import auth from "../../firebase.init";

const Todo = () => {
  const [todos, setTodos] = useState([]);
    const [user, loading] = useAuthState(auth);

if (loading){

  <p>
    <progress class="progress w-56"></progress>
  </p>
}

  useEffect(() => {
    fetch(`http://localhost:5000/todos/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, [user]);
  const done = (id) =>{
    console.log(id)
  }
  return (
    <div className=" min-h-[100px]  bg-none mb-20 pb-10 overflow-scroll max-h-screen">
      <h1 className="text-5xl text-center text-black p-5 lg:block  hidden">
        All Tasks is here
      </h1>
      <div className="lg:w-[80%] mt-5 border lg:mx-auto md:mx-auto p-5 mx-3   md:w-[80%] bg-[#0000000b] rounded-lg  min-h-[500px]">
        <h1 className="text-xl">
          <ul>
            {todos?.map((todo) => (
              <li key={todo?._id} className='my-5'>
                <input onClick={()=>done(todo._id)} className="bg-white mr-5 btn btn-sm border-0" type="button" value="done" />
                {todo?.taskname}
              </li>
            ))}
          </ul>
        </h1>
      </div>
    </div>
  );
};

export default Todo;
