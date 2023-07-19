import ProductsList from "./compoenents/ProductsList";
import { Routes, Route } from "react-router-dom";
import About from "./compoenents/About";
import ProductDetails from "./compoenents/ProductDetails";
import Sidbar from "./compoenents/Sidbar";
import NavBar from "./compoenents/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Sidbar />
              <ProductsList />
            </>
          }
        />
        <Route path="about" element={<About />} />
        <Route path="product/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;