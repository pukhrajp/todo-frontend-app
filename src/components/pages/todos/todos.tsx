import { Label } from "@radix-ui/react-label";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Checkbox } from "../../ui/checkbox";
import React from "react";
import { myAxios } from "../../../lib/axios";
import { AddTodoForm } from "./add-todo-form";
import { Button } from "../../ui/button";

import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  removeTodo,
  setLoading,
  setTodos,
  useTodoState,
} from "../../../redux/slices/todoSlice";

export function Todos() {
  // const [todoAppState, dispatch] = React.useReducer(todoAppReducer, {
  //   todos: [],
  //   loading: true,
  // });
  const dispatch = useDispatch();
  const todoAppState = useTodoState();

  const { todos, loading } = todoAppState;

  React.useEffect(() => {
    dispatch(setLoading(true));
    myAxios
      .get("/todos")
      .then((response) => {
        dispatch(setTodos(response.data.todos));
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
        dispatch(setLoading(false));
      });
  }, []);

  function deleteTodo(todoId: string) {
    dispatch(setLoading(true));
    myAxios
      .delete(`/todos/${todoId}`)
      .then(() => {
        dispatch(removeTodo(todoId));
      })
      .catch((error) => {
        console.error("Error deleting todo:", error);
        dispatch(setLoading(false));
      });
  }

  function updateTodo(isChecked: boolean, todoId: string) {
    dispatch(setLoading(true));
    myAxios
      .patch(`/todos/${todoId}`, { completed: isChecked })
      .then((response) => {
        // refreshTodos();
      })
      .catch((error) => {
        console.error("Error updating todo:", error);
      });
  }

  function saveTodo(data: { title: string }) {
    dispatch(setLoading(true));
    myAxios
      .post("/todos", data)
      .then((response) => {
        dispatch(addTodo(response.data.todo));
      })
      .catch((error) => {
        console.error("Error adding todo:", error);
      });
  }

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="p-4">
      <div className="mt-4 mb-8">
        <Card className="py-2 p-2">
          <CardHeader>
            <CardTitle>Add Todo</CardTitle>
          </CardHeader>
          <CardContent className="p-2 flex items-center gap-2">
            <AddTodoForm onSave={saveTodo} />
          </CardContent>
        </Card>
      </div>

      {todos.length > 0 ? (
        <div className={"flex flex-col gap-4"}>
          <h1 className="text-2xl font-bold mb-4">Todos</h1>
          {todos.map((todo) => (
            <Card key={todo.id} className="py-2 p-2">
              <CardContent className="p-2 flex items-center gap-2">
                <Checkbox
                  id={todo.id.toString()}
                  onCheckedChange={(checked) =>
                    updateTodo(checked as boolean, todo.id)
                  }
                />
                <Label
                  htmlFor={todo.id.toString()}
                  className={todo.completed ? "line-through" : ""}
                >
                  {todo.title}
                </Label>
                <Button
                  variant={"destructive"}
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No todos available.</p>
      )}
    </div>
  );
}
