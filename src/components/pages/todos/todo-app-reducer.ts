export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  userId: string;
}
export interface TodoAppState {
  todos: Todo[];
  loading: boolean;
}

export function todoAppReducer(state: TodoAppState, action: any) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload as Todo],
        loading: false,
      };
    case "UPDATE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, ...(action.payload as Todo) }
            : todo
        ),
        loading: false,
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
        loading: false,
      };
    case "SET_TODO":
      return {
        ...state,
        todos: action.payload as Todo[],
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload as boolean,
      };
    default:
      return state;
  }
}
