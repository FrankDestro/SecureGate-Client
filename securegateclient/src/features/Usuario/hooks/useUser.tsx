import { useEffect, useState } from 'react';
import * as userService from "../services/user-service";
import { UserDTO } from '../models/user';

type QueryParams = {
    page: number;
    size: number;
    text?: string;
};

export function useUser() {
    const [users, setUsers] = useState<UserDTO[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [totalItems, setTotalItems] = useState(0);

    const [queryParams, setQueryParams] = useState<QueryParams>({
        page: 0,
        size: 10,
    });

    function search(text: string) {
        setUsers([]);
        setQueryParams({
            ...queryParams,
            page: 0,
            text,
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
        userService
            .getAllUsers(queryParams.page, queryParams.size)
            .then((response) => {
                const { content, totalElements } = response.data;
                setUsers(content);
                setTotalItems(totalElements);
            })
            .finally(() => setIsLoading(false));
    }, [queryParams]);

    return {
        users,
        isLoading,
        totalItems,
        queryParams,
        search,
        changePage,
        changePageSize,
    };
}

