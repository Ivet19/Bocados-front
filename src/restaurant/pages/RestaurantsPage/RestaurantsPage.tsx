import { useEffect } from "react";
import { useSearchParams } from "react-router";
import useRestaurants from "../../hooks/useRestaurants";
import Pagination from "../../../components/Pagination/Pagination";
import RestaurantsList from "../../components/RestaurantsList/RestaurantsList";
import "./RestaurantsPage.css";
import Loading from "../../../components/Loading/Loading";
import useLoading from "../../../hooks/hooks/useLoading";

const RestaurantsPage: React.FC = () => {
  const {
    loadRestaurants,
    restaurantsData: { restaurants, restaurantsTotal },
  } = useRestaurants();

  const [urlSearchParams] = useSearchParams();

  const pageNumber = urlSearchParams.get("page")
    ? Number(urlSearchParams.get("page"))
    : 1;

  useEffect(() => {
    window.scrollTo({ top: 0 });

    loadRestaurants(pageNumber);
  }, [loadRestaurants, pageNumber]);

  const {
    loadingState: { isLoading },
  } = useLoading();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <header className="page-header">
        <h2 className="page-header__title"> Lista de restaurantes</h2>
        <span className="page-header__counter">
          {`Total: ${restaurants.length} / ${restaurantsTotal}`}
        </span>
      </header>
      <RestaurantsList restaurants={restaurants} />
      <Pagination
        restaurantsTotal={restaurantsTotal}
        currentPage={pageNumber}
      />
    </>
  );
};

export default RestaurantsPage;
