import React from "react";
import Todo from './pages/Todo'
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import ConfirmationPage from "./pages/ConfirmationPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Todo />} />
        <Route path="/confirmationPage" element={<ConfirmationPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
