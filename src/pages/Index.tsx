
import { Header } from "@/components/layout/Header";
import { VideoReel } from "@/components/video/VideoReel";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowDown } from "lucide-react";

// Mock data for video reels
const mockReels = [
  {
    id: "1",
    username: "beatboxmaster",
    avatar: "https://source.unsplash.com/1605810230434-7631ac76ec81/150x150",
    videoUrl: "https://source.unsplash.com/1581092795360-fd1ca04f0952",
    description: "Working on some new patterns with lip rolls and throat bass 🔥 #beatbox #skillshare",
    likes: 243,
    comments: 47,
    isFollowing: true
  },
  {
    id: "2",
    username: "rhythmqueen",
    avatar: "https://source.unsplash.com/1721322800607-8c38375eef04/150x150",
    videoUrl: "https://source.unsplash.com/1605810230434-7631ac76ec81",
    description: "Fast inward bass technique practice. Took me 3 months to get this right! #beatboxpractice",
    likes: 189,
    comments: 32,
    isFollowing: false
  },
  {
    id: "3",
    username: "loopstation_pro",
    avatar: "https://source.unsplash.com/1581092795360-fd1ca04f0952/150x150",
    videoUrl: "https://source.unsplash.com/1721322800607-8c38375eef04",
    description: "Building a 4-layer loopstation beat with only vocal sounds 💯 Who wants a tutorial?",
    likes: 527,
    comments: 98,
    isFollowing: true
  }
];

export default function Index() {
  const [currentReelIndex, setCurrentReelIndex] = useState(0);
  
  const handleNext = () => {
    if (currentReelIndex < mockReels.length - 1) {
      setCurrentReelIndex(currentReelIndex + 1);
    }
  };
  
  const handlePrevious = () => {
    if (currentReelIndex > 0) {
      setCurrentReelIndex(currentReelIndex - 1);
    }
  };
  
  const currentReel = mockReels[currentReelIndex];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 py-6 container max-w-md">
        <div className="relative flex flex-col items-center">
          <VideoReel 
            id={currentReel.id}
            username={currentReel.username}
            avatar={currentReel.avatar}
            videoUrl={currentReel.videoUrl}
            description={currentReel.description}
            likes={currentReel.likes}
            comments={currentReel.comments}
            isFollowing={currentReel.isFollowing}
          />
          
          {/* Navigation controls */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handlePrevious} 
              disabled={currentReelIndex === 0}
              className="rounded-full bg-background/40 backdrop-blur-sm text-white h-10 w-10"
            >
              <ArrowUp className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleNext} 
              disabled={currentReelIndex === mockReels.length - 1}
              className="rounded-full bg-background/40 backdrop-blur-sm text-white h-10 w-10"
            >
              <ArrowDown className="h-6 w-6" />
            </Button>
          </div>
          
          {/* Indicators */}
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-2">
            {mockReels.map((_, index) => (
              <div 
                key={index}
                className={`h-2 w-2 rounded-full ${index === currentReelIndex ? 'bg-primary' : 'bg-background/40'}`}
                onClick={() => setCurrentReelIndex(index)}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
