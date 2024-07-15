import { useHandleCharacters } from '../../use-cases/use-handle-characters';
import { useEffect } from 'react';
import './styles.css'

export const Pagination = () => {
  const { page, setPage, pagination } = useHandleCharacters();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => prevPage - 1);
    scrollToTop();
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
    scrollToTop();
  };

  useEffect(() => {
    if (!pagination?.count) {
      setPage(1);
    }
  }, [pagination?.count, setPage]);

  return (
    <div className="pagination">
      <button
        id="prev-page"
        onClick={handlePreviousPage}
        disabled={!pagination?.prev}
      >
        Previous
      </button>
      <span id="page-info">Page {page}</span>
      <button
        id="next-page"
        onClick={handleNextPage}
        disabled={!pagination?.next}
      >
        Next
      </button>
    </div>
  );
};
