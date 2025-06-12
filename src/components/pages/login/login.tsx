import { cn } from "../../../lib/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { useSearchParams } from "react-router";
import { QuickAlert } from "../../ui/quick-alert/quick-alert";
import { LoginForm } from "./login-form";

export function Login({ className, ...props }: React.ComponentProps<"div">) {
  const [searchParams] = useSearchParams();

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className={cn("flex flex-col gap-6", className)} {...props}>
          <QuickAlert
            message={searchParams.get("message") || ""}
            type={
              (searchParams.get("type") as
                | "info"
                | "success"
                | "warning"
                | "error") || "info"
            }
          />

          <Card>
            <CardHeader>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <LoginForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
