import { User } from "../types/user";

export const authenticated = (key: string, data: User) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const isAuthenticate = (key: string) => {
  if (!localStorage.getItem(key)) return;
  return JSON.parse(localStorage.getItem(key) as string);
};
export const removeLs = (key:string) => {
  return localStorage.removeItem(key);
};
