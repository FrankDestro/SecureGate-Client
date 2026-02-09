export type systemDTO = {
  id: number,
  code: string
  name: string
  description: string
  clientId: string
  clientSecretHash: string
  active: string
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  environmentType : string;
};


export type SystemRequest = {
  id?: string; 
  code: string
  name: string
  description: string
  clientId: string
  active : boolean
  clientSecretHash: string
  environmentType: string;
};

export type systemAssociateByUserDTO = {
  systemName: string;
  roles: string[];
  permissions: string[];
};


