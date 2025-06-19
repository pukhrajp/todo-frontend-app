import { useForm } from "react-hook-form";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { myAxios } from "../../../lib/axios";
import type { Todo } from "./todo-app-reducer";

const AddTodoSchema = z.object({
  title: z.string().min(1, "Title is required"),
});
export function AddTodoForm({
  onSave,
}: {
  onSave: (data: { title: string }) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(AddTodoSchema),
  });

  function saveTodo(data: { title: string }) {
    onSave(data);
  }
  return (
    <form onSubmit={handleSubmit(saveTodo)} className="flex items-center gap-2">
      <div>
        <Input {...register("title")} />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}
      </div>
      <Button>Add</Button>
    </form>
  );
}
