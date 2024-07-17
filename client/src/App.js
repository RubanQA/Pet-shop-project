import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/appRouter"; // Adjust the path if necessary

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
