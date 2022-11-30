import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
