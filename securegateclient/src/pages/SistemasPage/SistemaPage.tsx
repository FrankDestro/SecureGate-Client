import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";
import System from "../../features/System/System";
import { systemDTO } from "../../models/system/systems";
import * as systemService from "../../services/system-service";
import NoData from "../../components/NoData/NoData";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

type QueryParams = {
  page: number;
  size: number;
  nome : string;
};

function SistemaPage() {
  const [systems, setSystems] = useState<systemDTO[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalItems, setTotalItems] = useState(0); 
  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 0,
    size: 10,
    nome: ""
  });

  const pageSizeOptions = [5, 10, 20];

  function handleSearch(searchText: string) {
    setSystems([]);
    const updatedParams = {
      ...queryParams,
      page: 0,
      nome: searchText,
    };
    setQueryParams(updatedParams);
  }

  function handlePageSizeChange(newSize: number) {
    setQueryParams({
      ...queryParams,
      size: newSize,
      page: 0,
      nome: ""
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
      systemService
        .getAllSystems(queryParams.page, queryParams.size, queryParams.nome)
        .then((response) => {
          const { totalElements, content } = response.data;
          setTotalItems(totalElements);
          setSystems(content);
        })
        .finally(() => setIsLoading(false));
    }, 0);

    return () => clearTimeout(timer);
  }, [queryParams]);

  return (
    <div className="app-container-content">
      {isLoading ? (
        <div className="spinner-container">
          <div className="spinner-border" role="status"></div>
          <span>Carregando....</span>
        </div>
      ) : systems.length === 0 ? (
        <>
          <System onSearch={handleSearch} systems={systems} />
          <NoData icon={faDatabase} message="Não há dados disponíveis" />
        </>
      ) : (
        <>
          <System onSearch={handleSearch} systems={systems} />
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

export default SistemaPage;
