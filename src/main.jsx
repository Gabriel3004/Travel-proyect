import React from "react";
import ReactDOM from "react-dom/client";
import QuizWrapper from "./components/QuizWrapper";
import { MyButton } from "./components/Confirm";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuizWrapper />
   <MyButton />
  </React.StrictMode>
  
);
