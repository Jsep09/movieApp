import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import InjectTailwind from "./InjectTailwind.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import About from "./pages/About.tsx";
import Favorite from "./pages/Favorite.tsx";
import Detail from "./pages/Detail.tsx";
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
    path: "/detail",
    element: <Detail />,
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <InjectTailwind>
      <RouterProvider router={router} />
    </InjectTailwind>
  </StrictMode>
);
