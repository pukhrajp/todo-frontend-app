import { useEffect, useState } from "react";
import { AuthUserCard } from "../../cards/auth-user-card/auth-user-card";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { myAxios } from "../../../lib/axios";

export function AuthUserPopover() {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    myAxios
      .get("/current-user")
      .then((response) => {
        console.log("Current user data:", response.data);
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching current user data:", error);
      });
  }, []);
  return (
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
        <AuthUserCard user={userData} />
      </PopoverContent>
    </Popover>
  );
}
