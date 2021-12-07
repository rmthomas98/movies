import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import FrontPage from "./components/FrontPage/FrontPage";
import Footer from "./components/Footer/Footer";
import Explore from "./components/Explore/Explore";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="explore/:section" element={<Explore />}>
          {/* <Route path="genre" element={} /> */}
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
