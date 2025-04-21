import React, { JSX, useState } from 'react';
import './Pagination.css'; 

interface PaginationProps {
  totalItems: number;
  itemsPerPageOptions?: number[];
  initialPage?: number;
  selectedSize?: number; // novo prop
  onPageSizeChange?: (newSize: number) => void; // novo prop
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPageOptions = [10, 20, 50],
  initialPage = 1,
  selectedSize,
  onPageSizeChange,
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [itemsPerPage, setItemsPerPage] = useState(selectedSize || itemsPerPageOptions[0]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSize = Number(e.target.value);
    setItemsPerPage(newSize);
    setCurrentPage(1);

    if (onPageSizeChange) {
      onPageSizeChange(newSize); // avisa o componente pai da mudança
    }
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
