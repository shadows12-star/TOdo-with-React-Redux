import React from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../Features/todo/todoSlice';

const Addtodo = () => {

    const [value, setValue] = React.useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (value.trim() === "") return;

        dispatch(addTodo(value));

        setValue("");
    }

    return (

        <div className="w-full max-w-2xl mx-auto mt-10">

            <form
                onSubmit={handleSubmit}
                className="flex items-center overflow-hidden rounded-2xl shadow-xl border border-gray-200 bg-white"
            >

                <input
                    type="text"
                    placeholder="Write your todo..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="
                        w-full
                        px-5
                        py-4
                        text-lg
                        outline-none
                        bg-transparent
                        placeholder:text-gray-400
                    "
                />

                <button
                    type="submit"
                    className="
                        px-8
                        py-4
                        bg-gradient-to-r
                        from-green-500
                        to-emerald-600
                        text-white
                        font-semibold
                        hover:scale-105
                        active:scale-95
                        transition-all
                        duration-200
                    "
                >
                    Add
                </button>

            </form>

        </div>
    )
}

export default Addtodo