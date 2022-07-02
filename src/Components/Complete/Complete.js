import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Complete = () => {
  const [complete, setComplete] = useState([]);
  const [user, loading] = useAuthState(auth);
  let progress;
  if (loading) {
    progress = <progress className="progress w-56"></progress>;
  }
  useEffect(() => {
    fetch(
      `https://tragically-toonie-69979.herokuapp.com/complete/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setComplete(data));
  }, [user]);
  console.log(complete);
  return (
    <div className=" min-h-[100px]  bg-none mb-20 bg-blue-100 pb-10 overflow-scroll max-h-screen">
      <h1 className="text-5xl text-center text-black p-5 lg:block  hidden">
        Hurrah !!! you have complete {complete.length} tasks
      </h1>
      <div className="lg:w-[80%] mt-5 border lg:mx-auto md:mx-auto p-5 mx-3   md:w-[80%] bg-[#0000000b] rounded-lg  min-h-[500px]">
        <h1 className="text-xl">
          <p className="text-xl text-center">{progress}</p>
          <ul className="text-green-500 mx-auto lg:w-1/2">
            {complete?.map((todo, i) => (
              <li
                key={todo._id}
                className=" rounded-xl my-2 bg-[#443f3307] hover:bg-[#2b2a2814] px-5"
              >
                <del>
                  {i + 1}. {todo.taskname}
                </del>
              </li>
            ))}
          </ul>
        </h1>
      </div>
    </div>
  );
};

export default Complete;
