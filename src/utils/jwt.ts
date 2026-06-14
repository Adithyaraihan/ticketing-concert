import { User } from "../models/user.model";
import { Types } from "mongoose";
import jwt from "jsonwebtoken";
import { SECRET } from "./env";

export interface IUserToken
  extends Omit<
    User,
    | "password"
    | "activationCode"
    | "email"
    | "isActive"
    | "fullName"
    | "profilePicture"
    | "userName"
  > {
  id?: Types.ObjectId;
}

// Digunakan saat login berhasil
export const generateToken = (user: IUserToken) => {
  const token = jwt.sign(user, SECRET, {
    expiresIn: "1h",
  });
  return token;
};

// mengambil data user yang sedang mengakses endpoint (user siapa?)
export const getUserData = (token: string) => {
  const user = jwt.verify(token, SECRET) as IUserToken;
  return user;
};
