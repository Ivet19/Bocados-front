import { useEffect } from "react";
import { useSearchParams } from "react-router";
import useRestaurants from "../../hooks/useRestaurants";
import Pagination from "../../../ui/components/Pagination/Pagination";
import RestaurantsList from "../../components/RestaurantsList/RestaurantsList";
import Loading from "../../../ui/components/Loading/Loading";
import useLoading from "../../../ui/hooks/hooks/useLoading";
import "./RestaurantsPage.css";
import "../pages.css";

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
      <header className="page__header">
        <h2 className="page__title"> Lista de restaurantes</h2>
        <span className="page__counter">
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
