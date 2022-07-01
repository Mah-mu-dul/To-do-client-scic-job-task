import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Complete = () => {
  const [complete, setComplete] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    fetch(`http://localhost:5000/todos/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setComplete(data));
  }, [user]);
  console.log(complete);
  return (
    <div className=" min-h-[100px]  bg-none mb-20 bg-blue-100 pb-10 overflow-scroll max-h-screen">
      <h1 className="text-5xl text-center text-black p-5 lg:block  hidden">
        All Tasks is here
      </h1>
      <div className="lg:w-[80%] mt-5 border lg:mx-auto md:mx-auto p-5 mx-3   md:w-[80%] bg-[#0000000b] rounded-lg  min-h-[500px]">
        <h1 className="text-xl">
          <ul className="text-green-500">
            {complete?.map((todo) =>
             todo.status == 'done'?<li>{todo.taskname}</li>:<></>
             
            )}
          </ul>
        </h1>
      </div>
    </div>
  );
};

export default Complete;
