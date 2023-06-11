import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "@/src/App"
import Error from "@/src/pages/Error"
import Home from "@/src/pages/Home";
import AboutUs from "@/src/pages/AboutUs";
import Category from "@/src/pages/Category";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          index: true,
          element: <Home />
        },
        {
          path: "youvence",
          element: <AboutUs />
        },
        {
          path: "Box/",
          children: [
            {
              path: ":categorySlug",
              element: <Category />
            },
          ],
        },
      ],
    },
]);

export { router, RouterProvider}