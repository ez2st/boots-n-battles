
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mic, Video, MessageSquare, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Mic className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl text-primary">BeatBattle</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors">
            <Video className="h-5 w-5" />
            <span className="text-xs mt-1">Reels</span>
          </Link>
          <Link to="/battles" className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors">
            <Mic className="h-5 w-5" />
            <span className="text-xs mt-1">Battles</span>
          </Link>
          <Link to="/chat" className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors">
            <MessageSquare className="h-5 w-5" />
            <span className="text-xs mt-1">Chat</span>
          </Link>
          <Link to="/community" className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors">
            <Users className="h-5 w-5" />
            <span className="text-xs mt-1">Community</span>
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden md:flex gap-2">
            <Mic className="h-4 w-4" />
            Start Battle
          </Button>
          
          <Link to="/profile">
            <Avatar className="h-8 w-8 border border-border">
              <AvatarImage src="https://source.unsplash.com/1605810230434-7631ac76ec81/150x150" alt="User" />
              <AvatarFallback>BB</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
      
      <nav className="md:hidden flex items-center justify-around py-2 border-t border-border/40">
        <Link to="/" className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors">
          <Video className="h-5 w-5" />
          <span className="text-xs mt-1">Reels</span>
        </Link>
        <Link to="/battles" className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors">
          <Mic className="h-5 w-5" />
          <span className="text-xs mt-1">Battles</span>
        </Link>
        <Link to="/chat" className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors">
          <MessageSquare className="h-5 w-5" />
          <span className="text-xs mt-1">Chat</span>
        </Link>
        <Link to="/community" className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors">
          <Users className="h-5 w-5" />
          <span className="text-xs mt-1">Community</span>
        </Link>
      </nav>
    </header>
  );
}
