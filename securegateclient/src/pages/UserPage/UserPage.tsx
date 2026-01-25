import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { Outlet } from "react-router-dom";

import NoData from "../../components/ui/NoData/NoData";
import Pagination from "../../components/ui/Pagination/Pagination";
import LoadingOverlay from "../../layout/LoadingOverlay/LoadingOverlay";

import User from "../../features/Usuario/User";
import { useUser } from "../../features/Usuario/hooks/useUser";

function UserPage() {

  const { users, isLoading, totalItems, queryParams, search, changePage, changePageSize } = useUser();
  const pageSizeOptions = [5, 10, 20];

  return (
     <div className="app-container-content">
      {isLoading && <LoadingOverlay />}

      {!isLoading && (
        <>
          <User onSearch={search} users={users} />

          {users.length === 0 ? (
            <NoData icon={faDatabase} message="Não há dados disponíveis" />
          ) : (
            <Pagination
              totalItems={totalItems}
              itemsPerPageOptions={pageSizeOptions}
              selectedSize={queryParams.size}
              initialPage={queryParams.page + 1}
              onPageSizeChange={changePageSize}
              onPageChange={(page) => {
                changePage(page);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          )}
        </>
      )}
      <Outlet />
    </div>
  )
}

export default UserPage
