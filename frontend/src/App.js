import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import FrontPage from "./components/FrontPage/FrontPage";
import Footer from "./components/Footer/Footer";
import Explore from "./components/Explore/Explore";
import ExplorePopular from "./components/ExplorePopular/ExplorePopular";
import ExploreTopRated from "./components/ExploreTopRated/ExploreTopRated";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="explore" element={<Explore />}>
          <Route path="popular" element={<ExplorePopular />} />
          <Route path="top-rated" element={<ExploreTopRated />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
