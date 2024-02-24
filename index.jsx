import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <React.Suspense fallback="loading">
        {/* <div className=" bg-neutral-800  min-w-screen min-h-screen p-1 flex items-start justify-center"> */}
        <div className=" min-w-screen min-h-screen p-0 items-start justify-center overflow-hidden bg-fixed bg-[#1f1f1f]">
          <App />
        </div>
      </React.Suspense>
    </NextUIProvider>
  </React.StrictMode>,
);
