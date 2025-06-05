import { cn } from "../../../lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { SignupForm } from "./signup-form";

export function Signup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className={cn("flex flex-col gap-6", className)} {...props}>
          <Card>
            <CardHeader>
              <CardTitle>Create a new account</CardTitle>
            </CardHeader>
            <CardContent>
              <SignupForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
