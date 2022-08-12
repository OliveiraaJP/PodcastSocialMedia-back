import { User } from "@prisma/client";

export type UserDataData = Omit<User, 'id'>
export type UserData = Omit<User, 'id' | 'createdAt' | 'role' >
export type UserDataSignin = Omit<UserData, 'username' | 'image' >