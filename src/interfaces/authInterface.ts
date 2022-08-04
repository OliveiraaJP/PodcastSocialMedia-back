import { User } from "@prisma/client";

export type UserData = Omit<User, 'id' >
export type UserDataSignin = Omit<UserData, 'username' | 'image'>