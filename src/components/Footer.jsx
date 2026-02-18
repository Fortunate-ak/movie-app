import { Film } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border mt-12 px-6 md:px-12 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Film className="h-5 w-5 text-primary" />
          <span className="text-lg font-bold tracking-wider font-['Bebas_Neue']">
            MOVIE<span className="text-primary">APP</span>
          </span>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">About</a>
          <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
        </div>
        <p className="text-xs text-muted-foreground">© 2026 MovieApp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;