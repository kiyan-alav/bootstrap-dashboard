import { User } from "../types/user.types";

let usersData: User[] = [];

export const setUsersData = (users: User[]) => {
  usersData = users;
};

export const getUsersData = () => usersData;