import { Routes, Route} from "react-router-dom";

import { Home } from "../pages/Home";
import { Movies } from "../pages/Movies";
import { MovieDetails } from "../pages/MovieDetails";
import { NotFound } from "../pages/NotFound";

import { SharedHeader } from "./SharedHeader/SharedHeader";
import { Cast } from "components/Cast/Cast";
import { Reviews } from "components/Reviews/Reviews";


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedHeader />}>
       <Route index element={<Home />} />
       <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
         <Route path="cast" element={<Cast />} /> 
         <Route path="reviews" element={<Reviews />} />
        </Route>
       <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
