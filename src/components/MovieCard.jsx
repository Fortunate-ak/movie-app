import { Star } from "lucide-react";

const MovieCard = ({ movie }) => {
  return (
    <div className="group relative flex-shrink-0 w-[160px] md:w-[200px] cursor-pointer">
      <div className="relative overflow-hidden rounded-lg aspect-[2/3] bg-card">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center gap-1 text-accent text-xs mb-1">
            <Star className="h-3 w-3 fill-current" />
            {movie.rating}
          </div>
          <p className="text-xs text-muted-foreground">{movie.genre} · {movie.year}</p>
        </div>
      </div>
      <h3 className="mt-2 text-sm font-medium truncate text-foreground">
        {movie.title}
      </h3>
    </div>
  );
};

export default MovieCard;