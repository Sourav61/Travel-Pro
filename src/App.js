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
import { DarkModeContext } from "./context/darkModeContext";
import 'bootstrap/dist/css/bootstrap.css';
import { useAuth0 } from "@auth0/auth0-react";

import rootReducer from "./Redux/reducers/root.reducer";
import { Provider } from "react-redux";
import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";

const composedEnhancer = compose(applyMiddleware());

const store = createStore(rootReducer, composedEnhancer);

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <div className={darkMode ? "app dark" : "app"}>
      {/* <LocalizationProvider dateAdapter={AdapterDateFns} >
        <AppContext.Provider value={initialState}> */}
      <Provider store={store}>
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
                <Route path="flights">
                  <Route index element={<List />} />
                  <Route path=":flightId" element={<Single />} />
                  <Route
                    path="new"
                    element={<New inputs={productInputs} title="Add New flight" />}
                  />
                </Route>
              </Route>
              <Route path="user">
                <Route index element={<Home />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
      {/* </AppContext.Provider>
      </LocalizationProvider> */}
    </div>
  );
}

export default App;