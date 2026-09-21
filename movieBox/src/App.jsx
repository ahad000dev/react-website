import './App.css'
import Home  from './pages/home'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Show from './pages/show';
import MovieTitle from './pages/movieTitle';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/show",
    element: <Show/>,
  },
  {
    path: "/show/:id",
    element: <MovieTitle />,
  }
]);
function Router() {
  return <RouterProvider router={router} />
}

export default Router
