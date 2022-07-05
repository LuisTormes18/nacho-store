import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LayoutContainer } from "./components";
import {
  HomePage,
  CategoriesPage,
  CategoryPage,
  ProfilePage,
  PedidosPage,
  RealizarPagoPage,
  Error404,
} from "./pages";
import { updateLocalStorage } from "./utils/utils";
import useCart from "./hooks/useCart";
import useAuth from "./hooks/useAuth";

const App = () => {
  const { productsInCart } = useCart();
  const { user } = useAuth();
  let isAuthenticate = !!user;

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
            <Route
              path="/profile"
              element={
                isAuthenticate ? (
                  <ProfilePage />
                ) : (
                  <Navigate to="/" replace={true} />
                )
              }
            />
            <Route
              path="/pedidos"
              element={
                isAuthenticate ? (
                  <PedidosPage />
                ) : (
                  <Navigate to="/" replace={true} />
                )
              }
            />
            <Route path="/realizar-pago" element={<RealizarPagoPage />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </LayoutContainer>
      </BrowserRouter>
    </main>
  );
};

export default App;
