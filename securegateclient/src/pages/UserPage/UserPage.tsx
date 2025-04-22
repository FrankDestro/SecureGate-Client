import { Outlet } from "react-router-dom";
import User from "../../components/User/User";
import { useEffect, useState } from "react";
import { UserDTO } from "../../models/user";
import * as userService from "../../services/user-service";
import NoData from "../../components/NoData/NoData";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import Pagination from "../../components/Pagination/Pagination";

type QueryParams = {
  page: number;
  size: number;
};

function UserPage() {
  const [users, setUsers] = useState<UserDTO[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 0,
    size: 10,
  });

  const pageSizeOptions = [5, 10, 20];

  function handleSearch(searchText: string) {
    setUsers([]);
    const updatedParams = {
      ...queryParams,
      page: 0,
      text: searchText,
    };
    setQueryParams(updatedParams);
  }

  function handlePageSizeChange(newSize: number) {
    setQueryParams({
      ...queryParams,
      size: newSize,
      page: 0,
    });
  }

  const handlePageChange = (newPage: number) => {
    setQueryParams({ ...queryParams, page: newPage });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      userService
        .getAllUsers(queryParams.page, queryParams.size)
        .then((response) => {
          const { content, totalElements } = response.data;
          setUsers(content);
          setTotalItems(totalElements);
        })
        .finally(() => setIsLoading(false));
    }, 0);
    return () => clearTimeout(timer);
  }, [queryParams]);

  return (
    <div className="app-container-content ">
      {isLoading ? (
        <div className="spinner-container">
          <div className="spinner-border" role="status"></div>
          <span>Carregando....</span>
        </div>
      ) : users.length === 0 ? (
        <>
          <User onSearch={handleSearch} users={users} />
          <NoData icon={faDatabase} message="Não há dados disponíveis" />
        </>
      ) : (
        <>
          <User onSearch={handleSearch} users={users} />
          <Pagination
            totalItems={totalItems}
            itemsPerPageOptions={pageSizeOptions}
            selectedSize={queryParams.size}
            initialPage={queryParams.page + 1}
            onPageSizeChange={handlePageSizeChange}
            onPageChange={handlePageChange}
          />
        </>
      )}
      <Outlet />
    </div>
  );
}

export default UserPage;
