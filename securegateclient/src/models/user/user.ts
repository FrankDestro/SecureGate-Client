import { systemAssociateByUserDTO } from "./system/systemAssociateByUser";

export type UserDTO = {
  id: string;
  name: string;
  username: string;
  active: boolean;
  systems: systemAssociateByUserDTO[];
  createdAt: string;
  updatedAt: string;
};
