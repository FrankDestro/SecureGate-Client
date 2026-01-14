import { useEffect, useState } from "react";
import * as associationService from "../Services/association-service";
import { SistemaRolesDTO } from "../models/association";


function useSistemaPerfis(systemId: number) {
  const [perfis, setPerfis] = useState<SistemaRolesDTO[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (systemId ==  null) {
     
      return;
    }

    setIsLoading(true);
    associationService.getSistemaPerfis(systemId)
      .then((response) => setPerfis(response.data))
      .finally(() => setIsLoading(false));
  }, [systemId]);

  return { perfis, isLoading };
}

export default useSistemaPerfis;
