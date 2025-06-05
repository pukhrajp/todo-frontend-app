import { Link, Outlet } from "react-router";
import { AvatarFallback, AvatarImage, Avatar } from "../ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

export function AuthLayout() {
  return (
    <div>
      <header className="flex items-center justify-between px-4 py-2 bg-primary text-white">
        <div>Todo</div>
        <div>
          <Popover>
            <PopoverTrigger>
              <Avatar>
                <AvatarImage
                  className="w-8 h-8"
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent>
              <Card className="p-0 py-0">
                <CardContent className="p-2 border-b-2">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage
                        className="w-8 h-8"
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3>John Smith</h3>
                      <p>john.s@example.com</p>
                    </div>
                  </div>
                  <nav>
                    <ul>
                      <li>
                        <Link to="/profile">Profile</Link>
                      </li>
                      <li>
                        <Link to="/settings">Settings</Link>
                      </li>
                      <li>
                        <Button
                          variant={"ghost"}
                          onClick={() =>
                            console.log("do the work to logout the user")
                          }
                        >
                          Logout
                        </Button>
                      </li>
                    </ul>
                  </nav>
                </CardContent>
              </Card>
            </PopoverContent>
          </Popover>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
