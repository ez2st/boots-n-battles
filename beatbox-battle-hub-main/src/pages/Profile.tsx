
import { Header } from "@/components/layout/Header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mic, Trophy, Video, Users } from "lucide-react";
import { BattleCard } from "@/components/battles/BattleCard";
import { VideoReel } from "@/components/video/VideoReel";

// Mock user data
const mockUserProfile = {
  id: "user1",
  username: "beatboxmaster",
  fullName: "Alex Johnson",
  avatar: "https://source.unsplash.com/1605810230434-7631ac76ec81/150x150",
  bio: "3x National Beatbox Champion | Specializing in Throat Bass & Inward Bass | Tutorials every Friday",
  followers: 2453,
  following: 347,
  points: 1250,
  rank: 2,
  wins: 28,
  losses: 12,
  specialties: ["Throat Bass", "Inward Bass", "Technical Patterns", "Fast Combos"]
};

// Mock battles
const mockBattles = [
  {
    id: "completed1",
    status: "completed" as const,
    contestant1: {
      id: "user1",
      username: "beatboxmaster",
      avatar: "https://source.unsplash.com/1605810230434-7631ac76ec81/150x150",
      points: 1250,
      votes: 87
    },
    contestant2: {
      id: "user7",
      username: "rhythm_innovator",
      avatar: "https://source.unsplash.com/1581092795360-fd1ca04f0952/150x150",
      points: 1100,
      votes: 42
    },
    winnerIds: ["user1"]
  },
  {
    id: "completed3",
    status: "completed" as const,
    contestant1: {
      id: "user1",
      username: "beatboxmaster",
      avatar: "https://source.unsplash.com/1605810230434-7631ac76ec81/150x150",
      points: 1250,
      votes: 56
    },
    contestant2: {
      id: "user8",
      username: "techbeats",
      avatar: "https://source.unsplash.com/1721322800607-8c38375eef04/150x150",
      points: 1890,
      votes: 98
    },
    winnerIds: ["user8"]
  }
];

// Mock videos
const mockVideos = [
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
    id: "4",
    username: "beatboxmaster",
    avatar: "https://source.unsplash.com/1605810230434-7631ac76ec81/150x150",
    videoUrl: "https://source.unsplash.com/1721322800607-8c38375eef04",
    description: "Tutorial: How to improve your throat bass in just 10 minutes a day #beatboxtutorial",
    likes: 389,
    comments: 76,
    isFollowing: true
  }
];

export default function Profile() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 py-6 container">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row gap-6 items-start mb-8">
          <Avatar className="h-24 w-24 md:h-32 md:w-32 border-2 border-primary">
            <AvatarImage src={mockUserProfile.avatar} alt={mockUserProfile.username} />
            <AvatarFallback>{mockUserProfile.username[0]}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold">{mockUserProfile.username}</h1>
                <p className="text-muted-foreground">{mockUserProfile.fullName}</p>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" className="gap-2">
                  <Users className="h-4 w-4" />
                  Follow
                </Button>
                <Button>Message</Button>
              </div>
            </div>
            
            <p className="mb-4">{mockUserProfile.bio}</p>
            
            <div className="flex gap-6 flex-wrap">
              <div className="flex flex-col items-center">
                <span className="font-bold">{mockUserProfile.followers}</span>
                <span className="text-sm text-muted-foreground">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold">{mockUserProfile.following}</span>
                <span className="text-sm text-muted-foreground">Following</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold">#{mockUserProfile.rank}</span>
                <span className="text-sm text-muted-foreground">Rank</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold">{mockUserProfile.points}</span>
                <span className="text-sm text-muted-foreground">Points</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold">{mockUserProfile.wins}/{mockUserProfile.wins + mockUserProfile.losses}</span>
                <span className="text-sm text-muted-foreground">Win Rate</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Battle Record</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockUserProfile.wins}W - {mockUserProfile.losses}L</div>
              <p className="text-xs text-muted-foreground">
                Win rate: {Math.round((mockUserProfile.wins / (mockUserProfile.wins + mockUserProfile.losses)) * 100)}%
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Ranking Points</CardTitle>
              <Mic className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockUserProfile.points}</div>
              <p className="text-xs text-muted-foreground">
                Rank #{mockUserProfile.rank} globally
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Content</CardTitle>
              <Video className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockVideos.length}</div>
              <p className="text-xs text-muted-foreground">
                Videos uploaded
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Specialties */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Specialties</h2>
          <div className="flex flex-wrap gap-2">
            {mockUserProfile.specialties.map(specialty => (
              <span key={specialty} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                {specialty}
              </span>
            ))}
          </div>
        </div>
        
        {/* Tabs Content */}
        <Tabs defaultValue="videos" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="battles">Battles</TabsTrigger>
          </TabsList>
          
          <TabsContent value="videos" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockVideos.map(video => (
                <div key={video.id} className="max-w-sm mx-auto">
                  <VideoReel 
                    id={video.id}
                    username={video.username}
                    avatar={video.avatar}
                    videoUrl={video.videoUrl}
                    description={video.description}
                    likes={video.likes}
                    comments={video.comments}
                    isFollowing={video.isFollowing}
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="battles" className="mt-6">
            <div className="space-y-6">
              {mockBattles.map(battle => (
                <BattleCard key={battle.id} {...battle} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
