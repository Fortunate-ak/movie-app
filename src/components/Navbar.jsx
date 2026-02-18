import { Film, Search } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => setScrolled(window.scrollY > 50));
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-colors duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-gradient-to-b from-background/80 to-transparent"
      }`}
    >
      <div className="flex items-center gap-2">
        <Film className="h-7 w-7 text-primary" />
        <span className="text-2xl font-bold tracking-wider font-['Bebas_Neue']">
          MOVIE<span className="text-primary">APP</span>
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
        <a href="#" className="text-foreground hover:text-primary transition-colors">Home</a>
        <a href="#" className="hover:text-primary transition-colors">Movies</a>
        <a href="#" className="hover:text-primary transition-colors">TV Shows</a>
        <a href="#" className="hover:text-primary transition-colors">My List</a>
      </div>

      <button className="p-2 rounded-full hover:bg-secondary transition-colors">
        <Search className="h-5 w-5 text-muted-foreground" />
      </button>
    </nav>
  );
};

export default Navbar;
