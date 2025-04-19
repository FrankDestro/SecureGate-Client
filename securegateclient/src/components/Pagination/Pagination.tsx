import React, { JSX, useState } from 'react';
import './Pagination.css'; 

interface PaginationProps {
  totalItems: number; // Total de itens que queremos paginar
  itemsPerPageOptions?: number[]; // Opções de itens por página
  initialPage?: number; // Página inicial (opcional)
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPageOptions = [10, 20, 50],
  initialPage = 1,
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reseta para a primeira página ao mudar a quantidade de itens por página
  };

  const renderPageNumbers = () => {
    let pages: JSX.Element[] = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`page-number ${i === currentPage ? 'active' : ''}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="pagination-container">
      <div className="pagination-controls">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Anterior
        </button>
        {renderPageNumbers()}
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Próxima
        </button>
      </div>

      <div className="items-per-page">
        <label htmlFor="itemsPerPage">Itens por página: </label>
        <select id="itemsPerPage" onChange={handleItemsPerPageChange} value={itemsPerPage}>
          {itemsPerPageOptions.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Pagination;
