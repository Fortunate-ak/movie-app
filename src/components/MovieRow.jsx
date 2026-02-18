import { ChevronRight } from "lucide-react";
import MovieCard from "./MovieCard";

const MovieRow = ({ title, movies }) => {
  return (
    <section className="px-6 md:px-12 mb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl md:text-3xl text-foreground">{title}</h2>
        <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
          See All <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieRow;