import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { myTeamReducer } from "./my-team-reducer";
import { Button } from "../../ui/button";
import { Dialog, DialogTrigger, DialogContent } from "../../ui/dialog";

import { Input } from "../../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Label } from "../../ui/label";
import { myAxios } from "../../../lib/axios";
import { QuickAlert } from "../../ui/quick-alert/quick-alert";

const InviteMemberSchema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
});

export function MyTeam() {
  const [myTeamState, dispatch] = React.useReducer(myTeamReducer, {
    members: [],
    loading: true,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(InviteMemberSchema),
  });
  const [serverError, setServerError] = React.useState<string | null>(null);
  const { members, loading } = myTeamState;

  React.useEffect(() => {
    dispatch({ type: "SET_LOADING", payload: true });
    myAxios
      .get("/members")
      .then((response) => {
        dispatch({ type: "SET_MEMBERS", payload: response.data.members });
      })
      .catch((error) => {
        console.error("Error fetching team members:", error);
      });
  });
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">My Team</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Invite New Member</Button>
          </DialogTrigger>
          <DialogContent>
            <form
              onSubmit={handleSubmit(
                async (data: z.infer<typeof InviteMemberSchema>) => {
                  try {
                    const response = await myAxios.post("/members", data);
                    dispatch({
                      type: "INVITE_MEMBER",
                      payload: response.data.member,
                    });
                  } catch (error: any) {
                    setServerError(error?.response?.data);
                  }
                }
              )}
              className="flex flex-col gap-4"
            >
              <QuickAlert message={serverError || ""} />
              <Label htmlFor="email">Email</Label>
              <Input {...register("email")} />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
              <Button type="submit">Send Invite</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      {members.length === 0 ? (
        <div>No team members found.</div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.map((member) => (
              <TableRow>
                <TableCell className="font-medium">{member.name}</TableCell>
                <TableCell>{member.email}</TableCell>
                <TableCell>{member.status}</TableCell>
                <TableCell className="text-right">
                  <Button>Remove Member</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
