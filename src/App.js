import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes/main.routes";

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
