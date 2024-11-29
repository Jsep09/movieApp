import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import InjectTailwind from "./InjectTailwind.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import About from "./pages/About.tsx";
import Favorite from "./pages/Favorite.tsx";
import Detail from "./pages/Detail.tsx";
import Castdetail from "./pages/Castdetail.tsx";
import MovieSearch from "./pages/MovieSearch.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/favorite",
    element: <Favorite />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
  {
    path: "/persondetail/:id",
    element: <Castdetail />,
  },
  {
    path: "/MovieSearch/:query",
    element: <MovieSearch />,
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <InjectTailwind>
      <RouterProvider router={router} />
    </InjectTailwind>
  </StrictMode>
);
