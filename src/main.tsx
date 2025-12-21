import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.scss";
import Home from "./page/home/Home";
import { BrowserRouter,Route,Routes } from "react-router";
import { ScrollProvider } from "./context/ScrolleProvider";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ScrollProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
   

     </Routes>
    </BrowserRouter>
    </ScrollProvider>
  </StrictMode>,
)
