import { Navigate, Route, Routes } from "react-router";
import AddRestaurantPage from "../../restaurant/pages/AddRestaurantPage/AddRestaurantPage";
import RestaurantsPage from "../../restaurant/pages/RestaurantsPage/RestaurantsPage";
import RestaurantDetailPage from "../../restaurant/pages/RestaurantDetailPage/RestaurantDetailPage";
import ModifyRestaurantPage from "../../restaurant/pages/ModifyRestaurantPage/ModifyRestaurantPage";
import App from "../../ui/components/App/App";

const AppTestRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route index element={<Navigate to="/restaurants" />} />
      <Route path="restaurants" element={<RestaurantsPage />} />
      <Route path="add-restaurant" element={<AddRestaurantPage />} />
      <Route
        path="restaurants/:restaurantId"
        element={<RestaurantDetailPage />}
      />
      <Route
        path="restaurants/modify-restaurant/:restaurantId"
        element={<ModifyRestaurantPage />}
      />
    </Routes>
  );
};

export default AppTestRouter;
