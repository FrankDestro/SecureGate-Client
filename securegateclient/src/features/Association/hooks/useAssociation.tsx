import { useState } from "react";
import { AssociationDTO } from "../models/association";
import * as associationService from "../Services/association-service";

function useAssociation() {
  const [isLoading, setIsLoading] = useState(false);

  const submit = async (obj: AssociationDTO): Promise<number> => {
    setIsLoading(true);
    try {
      const response = await associationService.adicionarAssociation(obj);
      return response.status;
    } finally {
      setIsLoading(false);
    }
  };

  return { submit, isLoading };
}

export default useAssociation;