import { Route, Routes } from "react-router";
import AddRestaurantPage from "../../restaurant/pages/AddRestaurantPage/AddRestaurantPage";
import RestaurantsPage from "../../restaurant/pages/RestaurantsPage/RestaurantsPage";
import RestaurantDetailPage from "../../restaurant/pages/RestaurantDetailPage/RestaurantDetailPage";

const AppTestRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/restaurants" element={<RestaurantsPage />} />
      <Route path="/add-restaurant" element={<AddRestaurantPage />} />
      <Route
        path="/restaurants/:restaurantId"
        element={<RestaurantDetailPage />}
      />
    </Routes>
  );
};

export default AppTestRouter;
