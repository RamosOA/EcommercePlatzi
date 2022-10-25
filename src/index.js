import React from "react";
import * as ReactDOMClient  from "react-dom/client";
import App from "./routes/app";

const rootElement = document.getElementById('app');
const root = ReactDOMClient.createRoot(rootElement).render(<App />)

/* ReactDOMClient.render(<App />, document.getElementById('app')); */