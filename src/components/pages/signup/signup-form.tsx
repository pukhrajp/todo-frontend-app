import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { Link } from "react-router";
import { Label } from "../../ui/label";
import { useForm } from "react-hook-form";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const SignupFormSchema = z
  .object({
    name: z.string().min(3, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and Confirm Password do not match",
    path: ["confirmPassword"],
  });

export interface SignupFormError {
  name: string;
  email: string;
  password: string;
}

export function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors: error },
  } = useForm({
    resolver: zodResolver(SignupFormSchema),
  });

  function submitSignup(data: any) {
    console.log("Form submitted successfully", data);
  }
  console.log("Form errors", error);

  return (
    <form onSubmit={handleSubmit(submitSignup)}>
      <div className="flex flex-col gap-6">
        <div className="grid gap-3">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="John Smith"
            {...register("name")}
          />
          {error?.name && (
            <p className="text-red-500 text-sm">{error?.name?.message}</p>
          )}
        </div>
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            {...register("email")}
          />
          {error?.email && (
            <p className="text-red-500 text-sm">{error.email.message}</p>
          )}
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input id="password" type="password" {...register("password")} />
          {error?.password && (
            <p className="text-red-500 text-sm">{error.password.message}</p>
          )}
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="confirm-password">Confirm Password</Label>
          </div>
          <Input
            id="confirm-password"
            type="password"
            {...register("confirmPassword")}
          />
          {error?.confirmPassword && (
            <p className="text-red-500 text-sm">
              {error.confirmPassword.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <Button type="submit" className="w-full">
            Signup
          </Button>
          <Button variant="outline" className="w-full">
            Signup with Google
          </Button>
        </div>
      </div>
      <div className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <Link to="/login" className="underline underline-offset-4">
          Login
        </Link>
      </div>
    </form>
  );
}
