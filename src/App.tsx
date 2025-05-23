import Home from "./pages/home/Home"
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";
import './styles/Global.scss'
function App() {

  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "users/1",
          // element: <Products />,
        },
        {
          path: "orders",
          // element: <Products />,
        },
        {
          path: "posts",
          // element: <Products />,
        },
        {
          path: "elements",
          // element: <Products />,
        },
      ],
    },
    {
      path: 'login',
      element: <Login />
    }
  ]);


  return (
    < RouterProvider router={router} />

  )
}

export default App
