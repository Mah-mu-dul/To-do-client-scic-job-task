import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiFillDelete } from "react-icons/ai";
import auth from "../../firebase.init";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [e, setEdit] = useState(null);
  const [user, loading] = useAuthState(auth);

  let progress;
  if (loading) {
    progress = <progress className="progress w-56"></progress>;
  }

  useEffect(() => {
    fetch(`https://tragically-toonie-69979.herokuapp.com/todos/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, [user]);

  const done = (id) => {
    console.log(id);
    const status = { status: "done" };
    // here will be the fetch ppart
    const url = `https://tragically-toonie-69979.herokuapp.com/done/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(status),
    })
      .then((res) => res.json())
      .then((data) => {
        // window.location.reload();
      });
  };
  const edit = (todo) => {
    setEdit(todo);
  };
  const update = (e) => {
    console.log(e);
    setEdit(null);
  };
  return (
    <div className=" min-h-[100px]  bg-none mb-20 pb-10 overflow-scroll max-h-screen">
      <h1 className="text-5xl text-center text-black p-5 lg:block  hidden">
        All Tasks is here
      </h1>

      <div className="lg:w-[80%] mt-5 border lg:mx-auto md:mx-auto p-5 mx-3   md:w-[80%] bg-[#0000000b] rounded-lg  min-h-[500px]">
        <h1 className="text-xl">
          <p className="text-xl text-center">{progress}</p>

          <ul>
            {todos?.map((todo, i) => (
              <li key={todo?._id} className="my-5 flex justify-between">
                {i + 1}
                <>. </>
                <input
                  onClick={() => done(todo._id)}
                  className="bg-white mr-5 btn btn-sm border-0"
                  type="button"
                  value="done"
                />
                {todo?.taskname}
                <label
                  onClick={() => edit(todo)}
                  for="my-modal"
                  class="btn mx-5 border-0 text-black btn-sm bg-rose-500   modal-button"
                >
                  Edit task
                </label>

                {/* popup */}
                <input type="checkbox" id="my-modal" class="  modal-toggle" />
                <div class="modal  ">
                  <div class="modal-box bg-white text-black">
                    <h3 class="font-bold text-lg ">
                      write new task in the input feild{" "}
                    </h3>
                    <input
                      // ref={taskNameRef}
                      name="task"
                      type="text"
                      className="input border-2 bg-[#3f3f3479] w-[70%]"
                    />
                    <div class="modal-action">
                      <label
                        onClick={() => update(e)}
                        for="my-modal"
                        class="btn"
                      >
                        update
                      </label>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </h1>
      </div>
    </div>
  );
};

export default Todo;
