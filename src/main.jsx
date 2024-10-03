import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Header from "./layout/header.jsx";
import Footer from "./layout/footer.jsx";
// import { ReactLenis } from "./components/lenis.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ReactLenis> */}
      <Header />
      <App />
      <Footer />
    {/* </ReactLenis> */}
  </StrictMode>
);
