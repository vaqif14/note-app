import { useRoutes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import Login from "./Login";
import Navbar from "../components/Navbar";
export const Routes = () => {
  const client = new QueryClient();
  const routes = useRoutes([
    {
      path: "/",
      index: true,
      element: <Home />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "profile",
      element: <Profile />,
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);
  return (
    <QueryClientProvider client={client}>
      <Navbar />
      {routes}
    </QueryClientProvider>
  );
};
