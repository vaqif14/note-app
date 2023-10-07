import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";

// import App from "./App";
import RouteExample from "./RouteExample";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      <QueryClientProvider client={queryClient}>
        {/* <App /> */}
        <RouteExample />
      </QueryClientProvider>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
