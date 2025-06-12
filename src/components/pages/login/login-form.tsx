import { Link } from "react-router";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { set, useForm } from "react-hook-form";
import { Button } from "../../ui/button";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React from "react";
import { QuickAlert } from "../../ui/quick-alert/quick-alert";

const LoginFormSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z.string(),
});

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginFormSchema),
  });
  const [serverError, setServerError] = React.useState("");

  function handleFormSubmit(data: any) {
    axios
      .post("http://localhost:8000/login", data)
      .then((response) => {
        const { user, token } = response.data;
        console.log("Login successful", response, user, token);
      })
      .catch((error) => {
        setServerError(error.response?.data || "Login failed");
      });
  }
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="flex flex-col gap-6">
        <QuickAlert message={serverError} type="error" />
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="m@example.com"
            {...register("email")}
          />
          {errors?.email?.message && (
            <p className="text-red-700">{errors.email.message}</p>
          )}
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a
              href="#"
              className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" {...register("password")} />
        </div>
        <div className="flex flex-col gap-3">
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </div>
      </div>
      <div className="mt-4 text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link to={"/signup"} className="underline underline-offset-4">
          Sign up
        </Link>
      </div>
    </form>
  );
}
