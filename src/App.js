import Home from "./components/home/home";
import Login from "./components/login/login";
import PrivateRoute from "./components/private-route/private-route";
import ShopItem from "./components/shop-item/shop-item";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route exact path="/shop-item/:id" element={<ShopItem />} />
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<div>not found</div>} />
          </Route>
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
