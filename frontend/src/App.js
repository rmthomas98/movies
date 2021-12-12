import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import FrontPage from "./components/FrontPage/FrontPage";
import Footer from "./components/Footer/Footer";
import Explore from "./components/Explore/Explore";
import ExplorePopular from "./components/ExplorePopular/ExplorePopular";
import ExploreTopRated from "./components/ExploreTopRated/ExploreTopRated";
import ExplorePictureWinners from "./components/ExplorePictureWinners/ExplorePictureWinners";
import ExploreComingSoon from "./components/ExploreComingSoon/ExploreComingSoon";
import ExploreGenre from "./components/ExploreGenre/ExploreGenre";
import MovieViewer from "./components/MovieViewer/MovieViewer";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="explore" element={<Explore />}>
          <Route path="popular" element={<ExplorePopular />} />
          <Route path="top-rated" element={<ExploreTopRated />} />
          <Route path="picture-winners" element={<ExplorePictureWinners />} />
          <Route path="coming-soon" element={<ExploreComingSoon />} />
          <Route path="genre/:type" element={<ExploreGenre />} />
        </Route>
        <Route path="movie-viewer/:id" element={<MovieViewer />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
