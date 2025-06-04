import { Label } from "@radix-ui/react-label";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Checkbox } from "../../ui/checkbox";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";

const todos = [
  {
    id: 1,
    title: "Learn React",
    completed: false,
  },
  {
    id: 2,
    title: "Build a Todo App",
    completed: false,
  },
];
export function Todos() {
  return (
    <div className="p-4">
      <div className="mt-4 mb-8">
        <Card className="py-2 p-2">
          <CardHeader>
            <CardTitle>Add Todo</CardTitle>
          </CardHeader>
          <CardContent className="p-2 flex items-center gap-2">
            <Input />
            <Button>Add</Button>
          </CardContent>
        </Card>
      </div>

      {todos.length > 0 ? (
        <div className={"flex flex-col gap-4"}>
          <h1 className="text-2xl font-bold mb-4">Todos</h1>
          {todos.map((todo) => (
            <Card key={todo.id} className="py-2 p-2">
              <CardContent className="p-2 flex items-center gap-2">
                <Checkbox id={todo.id.toString()} />
                <Label
                  htmlFor={todo.id.toString()}
                  className={todo.completed ? "line-through" : ""}
                >
                  {todo.title}
                </Label>
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
