import { Routes, Route } from "react-router";
import Layout from "./layout/Layout";
import Home from "./page/Home";
import About from "./page/About";
import Blog from "./page/Blog";
import Contact from "./page/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
