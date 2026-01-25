import { useEffect, useState } from "react";
import { systemDTO } from "../models/systems";
import * as systemService from "../services/system-service";

type QueryParams = {
    page: number;
    size: number;
    nome: string;
};

function useSystem() {
    const [systems, setSystem] = useState<systemDTO[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [totalItems, setTotalItems] = useState(0);

    const [queryParams, setQueryParams] = useState<QueryParams>({
        page: 0,
        size: 10,
        nome: "",
    });

    function search(nome: string) {
        setSystem([]);
        setQueryParams({
            ...queryParams,
            page: 0,
            nome,
        });
    }

    function changePage(page: number) {
        setQueryParams({ ...queryParams, page });
    }

    function changePageSize(size: number) {
        setQueryParams({
            ...queryParams,
            size,
            page: 0,
        });
    }

    useEffect(() => {
        setIsLoading(true);
        systemService
            .getAllSystems(queryParams.page, queryParams.size, queryParams.nome)
            .then((response) => {
                const { content, totalElements } = response.data;
                setSystem(content);
                setTotalItems(totalElements);
            })
            .finally(() => setIsLoading(false));
    }, [queryParams]);

    return {
        systems,
        isLoading,
        totalItems,
        queryParams,
        search,
        changePage,
        changePageSize,
    }
}

export default useSystem
