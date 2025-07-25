import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import About from "./pages/about/About";
import Main from "./pages/main/Main";
import Blog from "./pages/blog/Blog";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
};

export default App;
