import { Route, Routes } from "react-router";
import AddRestaurantPage from "../../restaurant/pages/AddRestaurantPage/AddRestaurantPage";
import RestaurantsPage from "../../restaurant/pages/RestaurantsPage/RestaurantsPage";

const AppTestRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/restaurants" element={<RestaurantsPage />} />
      <Route path="/add-restaurant" element={<AddRestaurantPage />} />
    </Routes>
  );
};

export default AppTestRouter;
