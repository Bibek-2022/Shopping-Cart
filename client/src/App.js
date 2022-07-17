import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Product } from "./pages/products/Product";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product" element={<Product />}></Route>
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <h1>Tony World</h1>
    // </div>
  );
}

export default App;
