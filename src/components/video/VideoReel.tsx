
import { useState } from "react";
import { Play, Pause, ThumbsUp, ThumbsDown, Share, MessageSquare } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface VideoReelProps {
  id: string;
  username: string;
  avatar: string;
  videoUrl: string;
  description: string;
  likes: number;
  comments: number;
  isFollowing?: boolean;
}

export function VideoReel({ id, username, avatar, videoUrl, description, likes, comments, isFollowing = false }: VideoReelProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasLiked, setHasLiked] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // In a real app, we would control video playing here
  };

  const handleLike = () => {
    setHasLiked(!hasLiked);
  };

  return (
    <div className="relative aspect-[9/16] max-h-[calc(100vh-8rem)] w-full max-w-md mx-auto border border-border rounded-lg overflow-hidden bg-card">
      {/* Video container (placeholder for now) */}
      <div 
        className="absolute inset-0 bg-beatbox-dark flex items-center justify-center cursor-pointer"
        onClick={togglePlay}
        style={{ 
          backgroundImage: `url(${videoUrl})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center'
        }}
      >
        {!isPlaying && (
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-16 w-16 rounded-full bg-background/30 backdrop-blur-sm text-white"
          >
            <Play className="h-8 w-8" />
          </Button>
        )}

        {/* Overlay controls only shown when paused */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70"></div>
        )}
      </div>

      {/* Video info overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <div className="flex items-start gap-3">
          <Avatar className="h-10 w-10 border-2 border-primary">
            <AvatarImage src={avatar} alt={username} />
            <AvatarFallback>{username[0].toUpperCase()}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white">{username}</span>
              {!isFollowing && (
                <Button variant="secondary" size="sm" className="h-6 text-xs px-2 py-0">
                  Follow
                </Button>
              )}
            </div>
            <p className="text-sm text-white/80 line-clamp-2 mt-1">{description}</p>
          </div>
        </div>
      </div>

      {/* Side action buttons */}
      <div className="absolute right-4 bottom-20 flex flex-col items-center gap-4">
        <button 
          onClick={handleLike}
          className="flex flex-col items-center gap-1"
        >
          <div className={cn(
            "rounded-full p-2 bg-background/30 backdrop-blur-sm",
            hasLiked && "text-primary"
          )}>
            <ThumbsUp className="h-6 w-6" />
          </div>
          <span className="text-xs text-white">{hasLiked ? likes + 1 : likes}</span>
        </button>
        
        <button className="flex flex-col items-center gap-1">
          <div className="rounded-full p-2 bg-background/30 backdrop-blur-sm">
            <ThumbsDown className="h-6 w-6" />
          </div>
          <span className="text-xs text-white">0</span>
        </button>
        
        <button className="flex flex-col items-center gap-1">
          <div className="rounded-full p-2 bg-background/30 backdrop-blur-sm">
            <MessageSquare className="h-6 w-6" />
          </div>
          <span className="text-xs text-white">{comments}</span>
        </button>
        
        <button className="flex flex-col items-center gap-1">
          <div className="rounded-full p-2 bg-background/30 backdrop-blur-sm">
            <Share className="h-6 w-6" />
          </div>
          <span className="text-xs text-white">Share</span>
        </button>
      </div>
    </div>
  );
}
