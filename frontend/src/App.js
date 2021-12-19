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
import { useWindowWidth } from "@react-hook/window-size";

const App = () => {
  const width = useWindowWidth();

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<FrontPage width={width} />} />
        <Route path="explore" element={<Explore />}>
          <Route path="popular" element={<ExplorePopular />} />
          <Route path="top-rated" element={<ExploreTopRated />} />
          <Route path="picture-winners" element={<ExplorePictureWinners />} />
          <Route path="coming-soon" element={<ExploreComingSoon />} />
          <Route path="genre/:type" element={<ExploreGenre />} />
        </Route>
        <Route
          path="movie-viewer/:id"
          element={<MovieViewer width={width} />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
