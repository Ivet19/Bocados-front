import { Navigate, Route, Routes } from "react-router";
import App from "../../components/App/App";
import {
  LazyAddRestaurantPage,
  LazyNotfoundPage,
  LazyRestaurantsPage,
} from "../LazyPages/LazyPages";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="/restaurants" />} />
        <Route path="restaurants" element={<LazyRestaurantsPage />} />
        <Route path="add-restaurant" element={<LazyAddRestaurantPage />} />
        <Route path="*" element={<LazyNotfoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
