import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages";
import DetailRestaurantPage from "./pages/DetailRestaurantPage";

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<HomePage />}
      />
      <Route
        path='/detail/:id'
        element={<DetailRestaurantPage />}
      />
    </Routes>
  );
}

export default App;
