import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/HomePage/Home/Home";
import Blog from "../components/Blogs/Blog/Blog";
import Login from "../components/Login/Login/Login";
import Register from "../components/Login/Register/Register";
import ChefRecepies from "../components/ChefRecipes/ChefRecepies/ChefRecepies";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import About from "../components/AboutUs/About";
import Contact from "../components/Contact/Contact";
import UserDetails from "../components/UserDetails/UserDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/user",
        element: (
          <PrivateRoute>
            <UserDetails></UserDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/chef-recipe/:id",
        element: (
          <PrivateRoute>
            <ChefRecepies></ChefRecepies>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b7a10-chef-recipe-hunter-client-side-aothymoon59-aothymoon59.vercel.app/chef-recipes/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
