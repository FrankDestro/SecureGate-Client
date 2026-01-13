import { useEffect, useState } from "react";
import { SistemaDTO } from "../models/association";
import * as associationService from "../Services/association-service";

function useSistemas() {
    const [sistemas, setSistema] = useState<SistemaDTO[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        associationService.getTodosSistemas()
            .then((response) => {
                setSistema(response.data)
            })
            .finally(() => setIsLoading(false));
    }, [])

    return { sistemas, isLoading };

}

export default useSistemas;
