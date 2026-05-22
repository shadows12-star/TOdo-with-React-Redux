import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { removetodo } from "../Features/todo/todoSlice";

const Todos = () => {

    const todos = useSelector(
        (state) => state.todo.todos
    );

    const dispatch = useDispatch();

    return (

        <div className="w-full max-w-2xl mx-auto mt-8 space-y-4">

            {todos.map((todo) => (

                <div
                    key={todo.id}
                    className="
                        flex
                        items-center
                        justify-between
                        bg-white
                        shadow-lg
                        rounded-2xl
                        px-5
                        py-4
                        border
                        border-gray-200
                        hover:shadow-xl
                        transition-all
                        duration-200
                    "
                >

                    <div>

                        <h2 className="text-lg font-semibold text-gray-800">
                            {todo.title}
                        </h2>

                        <p className="text-sm text-gray-500">
                            {todo.completed
                                ? "Completed"
                                : "Pending"}
                        </p>

                    </div>

                    <button
                        onClick={() =>
                            dispatch(removetodo(todo.id))
                        }
                        className="
                            bg-red-500
                            hover:bg-red-600
                            text-white
                            px-4
                            py-2
                            rounded-xl
                            font-medium
                            transition-all
                            duration-200
                            active:scale-95
                        "
                    >
                        Remove
                    </button>

                </div>

            ))}

        </div>
    )
}

export default Todos