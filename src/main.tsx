import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.scss";
import Home from "./page/home/Home";
import { BrowserRouter,Route,Routes } from "react-router"
import { TestContextProvider } from "./context/TestContextProvider";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TestContextProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}




      {/* <Route path="/shop" element={<Shop />} >
      
      <Route path="oneProduit/:id" element={<OneProduit />} />
      <Route path="Carts/:id" element={<Carts />} />
      <Route path="Checkout/:id" element={< Checkout />} />
      
      </Route> */}

     </Routes>
    </BrowserRouter>
    </TestContextProvider>
  </StrictMode>,
)
