import { Routes, Route } from "react-router-dom";
import "./App.css";

import Welcome from "./components/Welcome";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFoundPage from "./components/NotFoundPage";

const App = () => {
  return (
    <Routes>
      <Route path="" element={<Welcome />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
