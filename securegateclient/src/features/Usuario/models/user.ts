
export type UserDTO = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  enabled: boolean;
  accountNonLocked: boolean;
  accountNonExpired: boolean;
  credentialsNonExpired: boolean;
  mfaEnabled: boolean;
};


export type UserRequest = {
  name: string;
  email: string;
  enabled: boolean;
};

