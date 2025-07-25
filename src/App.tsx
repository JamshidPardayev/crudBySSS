import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";

const App = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-3">
      <Header />
      <Blog />
      <About />
      <Footer />
    </div>
  );
};

export default App;
