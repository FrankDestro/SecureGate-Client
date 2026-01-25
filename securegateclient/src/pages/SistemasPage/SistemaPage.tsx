import { Outlet } from "react-router-dom";
import NoData from "../../components/ui/NoData/NoData";
import Pagination from "../../components/ui/Pagination/Pagination";
import useSystem from "../../features/Sistema/hooks/useSystem";
import System from "../../features/Sistema/System";
import LoadingOverlay from "../../layout/LoadingOverlay/LoadingOverlay";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

function SistemaPage() {

  const { systems, isLoading, totalItems, queryParams, search, changePage, changePageSize } = useSystem();
  const pageSizeOptions = [2, 10, 20];

  return (
    <div className="app-container-content">
      {isLoading && <LoadingOverlay />}

      {!isLoading && (
        <>
          <System onSearch={search} systems={systems} />

          {systems.length === 0 ? (
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

export default SistemaPage
