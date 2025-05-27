import { Link } from "react-router";
import "./Pagination.css";

interface PaginationProps {
  restaurantsTotal: number;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  restaurantsTotal,
  currentPage,
}) => {
  const pagesTotal = Math.ceil(restaurantsTotal / 5);
  const previousPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const firstPageClass = currentPage > 1 ? "" : " paginator__link--hidden";
  const lastPageClass =
    currentPage < pagesTotal ? "" : " paginator__link--hidden";

  return (
    <nav className="paginator">
      <Link
        className={`paginator__link ${firstPageClass}`}
        to={`/restaurants?page=${previousPage}`}
      >
        Anterior
      </Link>
      <span className="paginator__current-page">{currentPage}</span>
      <Link
        className={`paginator__link ${lastPageClass}`}
        to={`/restaurants?page=${nextPage}`}
      >
        Siguiente
      </Link>
    </nav>
  );
};

export default Pagination;
