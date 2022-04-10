//Genral react imports
import React from "react";
//Components
import RouterRefreshResolver from "./routerRefreshResolver/RouterRefreshResolver";
import NavRoutes from "./routes/NavRoutes";
//Redux
import { Provider } from "react-redux";
import store from "./redux/store/store";
//Router
import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <RouterRefreshResolver>
            <NavRoutes />
          </RouterRefreshResolver>
        </Router>
      </Provider>
    );
  }
}

export default App;
