import { Navigate, Route, Routes } from "react-router";
import App from "../../components/App/App";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import RestaurantsPage from "../../restaurant/pages/RestaurantsPage/RestaurantsPage";
import AddRestaurantPage from "../../restaurant/pages/AddRestaurantPage/AddRestaurantPage";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="/restaurants" />} />
        <Route path="restaurants" element={<RestaurantsPage />} />
        <Route path="add-restaurant" element={<AddRestaurantPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
