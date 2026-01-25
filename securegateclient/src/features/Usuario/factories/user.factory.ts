import { UserRequest } from "../models/user";

export function createEmptyUser(): UserRequest {
  return {
    name: "",
    email: "",
    enabled: false
  };
}