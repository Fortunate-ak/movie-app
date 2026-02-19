import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";
import Footer from "../components/Footer";
import { trendingMovies, popularMovies, topRatedMovies } from "../data/movie";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <div className="-mt-16 relative z-10">
        <MovieRow title="Trending Now" movies={trendingMovies} />
        <MovieRow title="Popular" movies={popularMovies} />
        <MovieRow title="Top Rated" movies={topRatedMovies} />
      </div>
      <Footer />
    </div>
  );
};

export default Index;