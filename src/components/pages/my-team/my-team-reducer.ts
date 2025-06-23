export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Member extends User {
  status: "invited" | "accepted" | "rejected" | "removed";
}
export interface MyTeamState {
  members: Member[];
  loading: boolean;
}

export function myTeamReducer(state: MyTeamState, action: any): MyTeamState {
  switch (action.type) {
    case "INVITE_MEMBER":
      return {
        ...state,
        members: [...state.members, action.payload as Member],
        loading: false,
      };
    case "REMOVE_MEMBER":
      return {
        ...state,
        members: state.members.filter((member) => member.id !== action.payload),
        loading: false,
      };
    case "SET_MEMBERS":
      return {
        ...state,
        members: action.payload as Member[],
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload as boolean,
      };
    default:
      return state;
  }
}
