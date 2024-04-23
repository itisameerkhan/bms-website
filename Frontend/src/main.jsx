import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../pages/Main/Main.jsx";
import Calculations from "../pages/Calculations/Calculations.jsx";
import { Provider } from "react-redux";
import appStore from "../redux/appStore.js";
import Error from "./Components/Error/Error.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/calculations",
        element: <Calculations />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>
);
