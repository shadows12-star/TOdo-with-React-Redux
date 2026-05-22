import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [{

        id: 1,
        title: "Learn React",
        completed: false
    }]
} 

export  const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers : {
        addTodo : (state,action) => {
            state.todos.push({
                id: nanoid(),
                title: action.payload,
                completed: false
            })
        },
        removetodo: (state,action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        updateTodo: (state,action) => {
            const {id,title} = action.payload;
            const existingTodo = state.todos.find(todo => todo.id === id);
            if (existingTodo) {
                existingTodo.title = title;
            }
        },
    }

})

export const {addTodo,removetodo,updateTodo} = todoSlice.actions;

export default todoSlice.reducer;


