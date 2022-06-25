import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LayoutContainer } from "./components";
import { HomePage, CategoriesPage, CategoryPage, ProfilePage } from "./pages";
// import { getProductsInCartFromLocalStorage } from "./stateManagement/actions/shoppinCart";

const App = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getProductsInCartFromLocalStorage());
  // }, []);
  

  return (
    <main>
      <BrowserRouter>
        <LayoutContainer>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/categories/:id" element={<CategoryPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<div> Error 404! </div>} />
          </Routes>
        </LayoutContainer>
      </BrowserRouter>
    </main>
  );
};

export default App;
