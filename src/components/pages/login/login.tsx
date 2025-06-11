import axios from "axios";
import { cn } from "../../../lib/utils";
import { Button } from "../../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Link, useSearchParams } from "react-router";
import { Alert, AlertTitle } from "../../ui/alert";
import { QuickAlert } from "../../ui/quick-alert/quick-alert";

export function Login({ className, ...props }: React.ComponentProps<"div">) {
  const [searchParams] = useSearchParams();
  function handleSayHello() {
    axios
      .get("http://localhost:8000")
      .then((response) => console.log(response))
      .catch((error) => console.error("Error fetching data:", error));
  }
  console.log("navigation", searchParams.get("message"));
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className={cn("flex flex-col gap-6", className)} {...props}>
          {searchParams?.get("message") && (
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
          )}

          <Card>
            <CardHeader>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                    />
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
                    <Input id="password" type="password" required />
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button type="button" className="w-full">
                      Login
                    </Button>
                    <Button variant="outline" className="w-full">
                      Login with Google
                    </Button>
                    <Button onClick={handleSayHello}>Say Hello</Button>
                  </div>
                </div>
                <div className="mt-4 text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <Link to={"/signup"} className="underline underline-offset-4">
                    Sign up
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
