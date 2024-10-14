import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LeniScroll from "./components/lenis";
import About from "./pages/about/about";
import Home from "./pages/home/home";
import Contact from "./pages/contact/contact";
import NotFound from "./pages/not-found/not-found";

const App = () => {
  return (
    <Router>
      <section>
        <LeniScroll />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>
    </Router>
  );
};

export default App;
