import { Play, Info, Star } from "lucide-react";
import { featuredMovie } from "../data/movie";
import heroBg from "../assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col justify-end h-full px-6 md:px-12 pb-24 max-w-2xl">
        <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
          Featured Film
        </span>
        <h1 className="text-5xl md:text-7xl leading-none mb-4">
          {featuredMovie.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <span className="flex items-center gap-1 text-accent">
            <Star className="h-4 w-4 fill-current" />
            {featuredMovie.rating}
          </span>
          <span>{featuredMovie.year}</span>
          <span className="px-2 py-0.5 rounded border border-border text-xs">
            {featuredMovie.genre}
          </span>
        </div>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 max-w-lg">
          {featuredMovie.overview}
        </p>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-primary hover:bg-primary/80 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors">
            <Play className="h-5 w-5 fill-current" /> Watch Now
          </button>
          <button className="flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground px-6 py-3 rounded-lg font-semibold transition-colors">
            <Info className="h-5 w-5" /> More Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
