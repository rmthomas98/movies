import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import FrontPage from "./components/FrontPage/FrontPage";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<FrontPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
