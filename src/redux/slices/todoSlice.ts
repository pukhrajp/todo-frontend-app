import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Todo } from "../../components/pages/todos/todo-app-reducer";
import { useSelector } from "react-redux";

const initialTodos: Todo[] = [];
const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: initialTodos,
    loading: false,
  },
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
      state.loading = false;
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      state.loading = false;
    },
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
      state.loading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { addTodo, removeTodo, setTodos, setLoading } = todoSlice.actions;
export const { reducer: todoReducer } = todoSlice;

export function useTodoState() {
  return useSelector(
    (state) =>
      state.todo as {
        todos: Todo[];
        loading: boolean;
      }
  );
}
