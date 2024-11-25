import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en.json";
import { store } from "./services/store.ts";
import { Provider } from "react-redux";

import { AuthProvider } from "react-oidc-context";
const cognitoAuthConfig = {
  authority:
    "https://cognito-idp.eu-north-1.amazonaws.com/eu-north-1_hNezLL8bn",
  client_id: "4u2mb54i0aj1uj7g1r37pb47u0",
  redirect_uri: "http://localhost:5173",
  response_type: "code",
  scope: "email openid phone",
};

TimeAgo.addDefaultLocale(en);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthProvider>
  </React.StrictMode>
);
