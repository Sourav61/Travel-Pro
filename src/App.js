import Dashboard from "./admin/pages/Main/dashboard/Dashboard";
import Login from "./Login";
import List from "./admin/pages/Main/list/List";
import Single from "./admin/pages/Main/single/Single";
import New from "./admin/pages/Main/new/New";
import Home from "./user/pages/home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./admin/formSource";
import "./admin/style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./admin/context/darkModeContext";
import 'bootstrap/dist/css/bootstrap.css';
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={!isAuthenticated ? <Login /> : <Home />} />
            <Route path="admin">
              <Route index element={<Dashboard />} />
              {/* <Route path="home" element={<Home />} /> */}
              <Route path="users">
                <Route index element={<List />} />
                <Route path=":userId" element={<Single />} />
                <Route
                  path="new"
                  element={<New inputs={userInputs} title="Add New User" />}
                />
              </Route>
              <Route path="products">
                <Route index element={<List />} />
                <Route path=":productId" element={<Single />} />
                <Route
                  path="new"
                  element={<New inputs={productInputs} title="Add New Product" />}
                />
              </Route>
            </Route>
            <Route path="user">
              <Route index element={<Home />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;