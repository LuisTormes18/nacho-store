import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LayoutContainer } from "./components";
import {
  HomePage,
  CategoriesPage,
  CategoryPage,
  ProfilePage,
  CartPage,
} from "./pages";
import { updateLocalStorage } from "./utils/utils";

const App = () => {
  const { productsInCart } = useSelector((state) => state.shoppingCart);
  useEffect(() => {
    updateLocalStorage(productsInCart);
  }, [productsInCart]);

  return (
    <main>
      <BrowserRouter>
        <LayoutContainer>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/categories/:id" element={<CategoryPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<div> Error 404! </div>} />
          </Routes>
        </LayoutContainer>
      </BrowserRouter>
    </main>
  );
};

export default App;
