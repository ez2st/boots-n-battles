
import { Header } from "@/components/layout/Header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Users, Mic } from "lucide-react";

// Mock data for community members
const mockCommunityMembers = [
  {
    id: "user1",
    username: "beatboxmaster",
    avatar: "https://source.unsplash.com/1605810230434-7631ac76ec81/150x150",
    specialty: "Throat Bass",
    points: 1250,
    rank: 2,
    isFollowing: true
  },
  {
    id: "user2",
    username: "rhythmqueen",
    avatar: "https://source.unsplash.com/1721322800607-8c38375eef04/150x150",
    specialty: "Technicality",
    points: 980,
    rank: 4,
    isFollowing: false
  },
  {
    id: "user3",
    username: "loopstation_pro",
    avatar: "https://source.unsplash.com/1581092795360-fd1ca04f0952/150x150",
    specialty: "Loopstation",
    points: 2340,
    rank: 1,
    isFollowing: true
  },
  {
    id: "user4",
    username: "bass_king",
    avatar: "https://source.unsplash.com/1605810230434-7631ac76ec81/150x150",
    specialty: "Bass Cannon",
    points: 2200,
    rank: 3,
    isFollowing: false
  },
  {
    id: "user5",
    username: "vocal_percussionist",
    avatar: "https://source.unsplash.com/1721322800607-8c38375eef04/150x150",
    specialty: "Vocal Drums",
    points: 1670,
    rank: 7,
    isFollowing: false
  },
  {
    id: "user6",
    username: "beatrhyme",
    avatar: "https://source.unsplash.com/1581092795360-fd1ca04f0952/150x150",
    specialty: "Musicality",
    points: 1590,
    rank: 8,
    isFollowing: false
  },
  {
    id: "user7",
    username: "rhythm_innovator",
    avatar: "https://source.unsplash.com/1605810230434-7631ac76ec81/150x150",
    specialty: "Innovation",
    points: 1100,
    rank: 12,
    isFollowing: true
  },
  {
    id: "user8",
    username: "techbeats",
    avatar: "https://source.unsplash.com/1721322800607-8c38375eef04/150x150",
    specialty: "Technical",
    points: 1890,
    rank: 5,
    isFollowing: false
  }
];

// Mock data for upcoming events
const mockEvents = [
  {
    id: "event1",
    title: "Grand Beatbox Battle 2023",
    date: "June 15, 2023",
    location: "Berlin, Germany",
    description: "The world's premier beatbox championship returns with the best beatboxers from around the globe.",
    participants: ["beatboxmaster", "loopstation_pro", "bass_king", "techbeats"]
  },
  {
    id: "event2",
    title: "Beatbox Showcase Night",
    date: "July 22, 2023",
    location: "Online Livestream",
    description: "A night of incredible performances featuring both established stars and emerging talent.",
    participants: ["rhythmqueen", "vocal_percussionist", "beatrhyme"]
  },
  {
    id: "event3",
    title: "Beatbox Workshop Series",
    date: "August 5-7, 2023",
    location: "New York, USA",
    description: "Learn from the best in the business with hands-on workshops covering all levels and techniques.",
    participants: ["beatboxmaster", "rhythm_innovator"]
  }
];

export default function Community() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 py-6 container">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Beatbox Community</h1>
          <p className="text-sm text-muted-foreground">Connect with beatboxers from around the world</p>
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Search beatboxers..." 
              className="pl-8"
            />
          </div>
        </div>
        
        <Tabs defaultValue="beatboxers" className="w-full mb-10">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="beatboxers">Beatboxers</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>
          
          <TabsContent value="beatboxers" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {mockCommunityMembers.map(member => (
                <Card key={member.id} className="overflow-hidden">
                  <CardHeader className="p-4 flex flex-row items-center gap-4">
                    <Avatar className="h-12 w-12 border border-border">
                      <AvatarImage src={member.avatar} alt={member.username} />
                      <AvatarFallback>{member.username[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">{member.username}</CardTitle>
                      <CardDescription>Rank #{member.rank}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="mb-4">
                      <span className="text-xs text-muted-foreground block mb-1">Specialty</span>
                      <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs">
                        {member.specialty}
                      </span>
                    </div>
                    <div className="mb-4">
                      <span className="text-xs text-muted-foreground block mb-1">Battle Points</span>
                      <span className="font-medium">{member.points}</span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <Button 
                        variant={member.isFollowing ? "outline" : "default"} 
                        size="sm" 
                        className="w-full"
                      >
                        {member.isFollowing ? "Following" : "Follow"}
                      </Button>
                      <Button variant="outline" size="sm" className="flex-none">
                        <Mic className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="events" className="mt-6">
            <div className="space-y-6">
              {mockEvents.map(event => (
                <Card key={event.id}>
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>
                      {event.date} • {event.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{event.description}</p>
                    <div className="mb-6">
                      <h4 className="font-medium mb-2 text-sm">Featured Beatboxers</h4>
                      <div className="flex -space-x-2">
                        {event.participants.map((username, index) => {
                          const member = mockCommunityMembers.find(m => m.username === username);
                          if (!member) return null;
                          
                          return (
                            <Avatar key={index} className="border-2 border-background h-8 w-8">
                              <AvatarImage src={member.avatar} alt={username} />
                              <AvatarFallback>{username[0]}</AvatarFallback>
                            </Avatar>
                          );
                        })}
                        {event.participants.length > 4 && (
                          <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-xs font-medium border-2 border-background">
                            +{event.participants.length - 4}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button>RSVP</Button>
                      <Button variant="outline">More Info</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
