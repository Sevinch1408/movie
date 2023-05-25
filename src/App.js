import {
  BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Home, Movie, TV, SingleMovies, SearchList, SingleTv } from "./pages";
import Header from "./containers/Header/Header";


function App() {
  return (
    <div>
      <Router>
        <Header/>
       <div className="container">
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/movie/:id" element={<SingleMovies />} />
          <Route path="/tv/:id" element={<SingleTv />} />
          <Route path="/search/:searchQuery" element={<SearchList/>}> </Route>
        </Routes>
       </div>
      </Router>
    </div>
  );
}

export default App;

