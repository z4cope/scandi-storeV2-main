//General react imports
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//Redux

//Apollo & Graphql stuff
import { ApolloProvider } from "@apollo/client";
import { client } from "./server/apollo";
import GlobalStyle from "./globalstyles/globalStyles";
//WebVitals
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyle />
    <App />
  </ApolloProvider>,

  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
