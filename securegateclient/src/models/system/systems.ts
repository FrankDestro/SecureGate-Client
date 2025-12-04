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
};


export type SystemRequest = {
  id?: string; 
  code: string
  name: string
  description: string
  clientId: string
  clientSecretHash: string
  active: boolean
};


