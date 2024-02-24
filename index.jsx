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
        <div className=" min-w-screen min-h-screen p-0 items-start justify-center overflow-hidden bg-fixed bg-[#2c2c2c] bg-[size:10px_10px] bg-[image:radial-gradient(circle_at_center,_rgba(255,255,255,0.005)_0,_rgba(255,255,255,0.005)_1px,_transparent_1px),_linear-gradient(to_right,_rgba(255,255,255,0.01)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(255,255,255,0.01)_1px,_transparent_1px)]">
          <App />
        </div>
      </React.Suspense>
    </NextUIProvider>
  </React.StrictMode>,
);
