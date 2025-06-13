import { Link } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";

export function AuthUserCard({ user }: { user: any }) {
  console.log("AuthUserCard user:", user);
  if (!user) {
    return null;
  }
  return (
    <div>
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage
            className="w-8 h-8"
            src="https://github.com/shadcn.png"
            alt="@shadcn"
          />
          <AvatarFallback>{user.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <Link to={`/profile/${user.id}`}>Profile</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Button
              variant={"ghost"}
              onClick={() => console.log("do the work to logout the user")}
            >
              Logout
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
