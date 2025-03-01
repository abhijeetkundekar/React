import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TodoList from "./components/todoList.jsx";

createRoot(document.getElementById("root")).render(
  <div>
    <TodoList />
  </div>
  // <StrictMode>
  //   <App />
  // </StrictMode>,
);
