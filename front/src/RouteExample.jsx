import {
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";

const PageOne = () => {
  return <h1>Page One</h1>;
};

const About = () => {
  return <h1>About</h1>;
};

const Contact = () => {
  return (
    <h1>
      <Link to="/about">
        <button>Go to about page</button>
      </Link>
    </h1>
  );
};




const RouteExample = () => {
  return (
    <Routes>
      {/* <Route path="/page-one" Component={<PageOne />}></Route>
      <Route path="/about" Component={<About />} />
      <Route path="/contact" Component={<Contact />} /> */}
    </Routes>
  );
};

export default RouteExample;
