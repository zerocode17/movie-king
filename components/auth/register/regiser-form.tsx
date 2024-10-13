"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

type FormData = z.infer<typeof schema>;

export default function RegisterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Here you would typically send the data to your backend
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating API call
    setIsSubmitting(false);
  };

  return (
    <div className="w-full max-w-md space-y-8 rounded-xl p-8 md:border">
      <h1 className="text-center text-3xl font-bold">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="username" className="">
            Username
          </Label>

          <Input
            id="username"
            {...register("username")}
            className=""
            placeholder="Enter your username"
          />

          {errors.username && (
            <p className="text-sm text-red-500">{errors.username.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="password" className="">
            Password
          </Label>

          <Input
            id="password"
            type="password"
            {...register("password")}
            className=""
            placeholder="Enter your password"
          />

          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>
        <Button
          type="submit"
          className="w-full text-lg font-medium"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Registring..." : "Register"}
        </Button>
      </form>
      <p className="text-center text-muted-foreground">
        Already have an account?{" "}
        <Link href="/login" className="text-white hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}
