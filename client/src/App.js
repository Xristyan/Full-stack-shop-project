import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/root";
import HomePage from "./pages/HomePage/homePage";
import Shop, { loader as itemsLoader } from "./pages/Shop/shop";
import ProductPage, {
  loader as itemLoader,
} from "./pages/ProductPage/productPage";
import ItemsRoot from "./pages/itemsRoot";
import CategoriesRoot from "./pages/Shop/categoriesRoot";
import Cart from "./pages/CartPage/cart";
const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "Men",
        element: <ItemsRoot />,
        children: [
          {
            index: true,
            element: <Shop />,
            loader: itemsLoader,
          },
          {
            path: ":Category",
            element: <CategoriesRoot />,
            children: [
              {
                index: true,
                element: <Shop />,
                loader: itemsLoader,
              },
              {
                path: ":eventId",
                element: <ProductPage />,
                loader: itemLoader,
              },
            ],
          },
        ],
      },
      { path: "Cart", element: <Cart /> },
      { path: "/Children", element: <Shop /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
