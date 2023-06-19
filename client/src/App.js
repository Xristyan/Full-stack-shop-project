import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/root";
import HomePage from "./pages/HomePage/homePage";
import Shop from "./pages/Shop/shop";
import ProductPage from "./pages/ProductPage/productPage";
import EventsRoot from "./pages/eventRoot";
const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "Men",
        element: <EventsRoot />,
        children: [
          {
            index: true,
            element: <Shop />,
            loader: async () => {
              const response = await fetch(
                "http://localhost:8080/product/getAll"
              );
              if (!response.ok) {
                return {
                  isError: true,
                  errorMessage: "Could not fetch events",
                };
              }
              const data = response.json();
              return data;
            },
          },
          {
            path: ":eventId",
            element: <ProductPage />,
            loader: async ({ params }) => {
              const response = await fetch(
                `http://localhost:8080/product/getProduct/${params.eventId}`
              );
              if (!response.ok) {
                return {
                  isError: true,
                  errorMessage: "Could not fetch events",
                };
              }
              const data = response.json();
              return data;
            },
          },
        ],
      },
      { path: "Women", element: <Shop /> },
      { path: "/Children", element: <Shop /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
