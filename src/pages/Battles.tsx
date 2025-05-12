
import { Header } from "@/components/layout/Header";
import { BattleCard } from "@/components/battles/BattleCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mic } from "lucide-react";

// Mock data for battles
const mockBattles = {
  live: [
    {
      id: "live1",
      status: "live" as const,
      contestant1: {
        id: "user1",
        username: "beatboxmaster",
        avatar: "https://source.unsplash.com/1605810230434-7631ac76ec81/150x150",
        points: 1250,
        votes: 64
      },
      contestant2: {
        id: "user2",
        username: "rhythmqueen",
        avatar: "https://source.unsplash.com/1721322800607-8c38375eef04/150x150",
        points: 980,
        votes: 48
      },
      viewers: 235
    }
  ],
  upcoming: [
    {
      id: "upcoming1",
      status: "upcoming" as const,
      contestant1: {
        id: "user3",
        username: "loopstation_pro",
        avatar: "https://source.unsplash.com/1581092795360-fd1ca04f0952/150x150",
        points: 2340
      },
      contestant2: {
        id: "user4",
        username: "bass_king",
        avatar: "https://source.unsplash.com/1605810230434-7631ac76ec81/150x150",
        points: 2200
      },
      scheduledFor: "2h 30m"
    },
    {
      id: "upcoming2",
      status: "upcoming" as const,
      contestant1: {
        id: "user5",
        username: "vocal_percussionist",
        avatar: "https://source.unsplash.com/1721322800607-8c38375eef04/150x150",
        points: 1670
      },
      contestant2: {
        id: "user6",
        username: "beatrhyme",
        avatar: "https://source.unsplash.com/1581092795360-fd1ca04f0952/150x150",
        points: 1590
      },
      scheduledFor: "5h 15m"
    }
  ],
  completed: [
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
      id: "completed2",
      status: "completed" as const,
      contestant1: {
        id: "user8",
        username: "techbeats",
        avatar: "https://source.unsplash.com/1721322800607-8c38375eef04/150x150",
        points: 1890,
        votes: 65
      },
      contestant2: {
        id: "user3",
        username: "loopstation_pro",
        avatar: "https://source.unsplash.com/1581092795360-fd1ca04f0952/150x150",
        points: 2340,
        votes: 112
      },
      winnerIds: ["user3"]
    }
  ]
};

export default function Battles() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 py-6 container">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold">Beatbox Battles</h1>
            <p className="text-sm text-muted-foreground">Challenge others and climb the ranks</p>
          </div>
          
          <Button className="gap-2">
            <Mic className="h-4 w-4" />
            Start a Battle
          </Button>
        </div>
        
        <Tabs defaultValue="live" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="live" className="relative">
              Live
              {mockBattles.live.length > 0 && (
                <span className="absolute top-1 right-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive"></span>
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          
          <TabsContent value="live" className="mt-6 space-y-6">
            {mockBattles.live.length > 0 ? (
              mockBattles.live.map(battle => (
                <BattleCard key={battle.id} {...battle} />
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No live battles right now</p>
                <Button variant="outline" className="mt-4">Refresh</Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="upcoming" className="mt-6 space-y-6">
            {mockBattles.upcoming.map(battle => (
              <BattleCard key={battle.id} {...battle} />
            ))}
          </TabsContent>
          
          <TabsContent value="completed" className="mt-6 space-y-6">
            {mockBattles.completed.map(battle => (
              <BattleCard key={battle.id} {...battle} />
            ))}
          </TabsContent>
        </Tabs>
        
        <div className="rounded-lg border border-border bg-card p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Leaderboard</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-border">
              <div className="flex-none w-8 text-center font-medium">#</div>
              <div className="flex-1">Beatboxer</div>
              <div className="flex-none w-20 text-right font-medium">Points</div>
              <div className="flex-none w-24 text-right font-medium">Win Rate</div>
            </div>
            
            {[
              { rank: 1, username: "loopstation_pro", avatar: "https://source.unsplash.com/1581092795360-fd1ca04f0952/150x150", points: 2340, winRate: "78%" },
              { rank: 2, username: "beatboxmaster", avatar: "https://source.unsplash.com/1605810230434-7631ac76ec81/150x150", points: 1250, winRate: "65%" },
              { rank: 3, username: "techbeats", avatar: "https://source.unsplash.com/1721322800607-8c38375eef04/150x150", points: 1890, winRate: "72%" },
              { rank: 4, username: "rhythmqueen", avatar: "https://source.unsplash.com/1605810230434-7631ac76ec81/150x150", points: 980, winRate: "60%" },
              { rank: 5, username: "bass_king", avatar: "https://source.unsplash.com/1721322800607-8c38375eef04/150x150", points: 2200, winRate: "74%" },
            ].map(user => (
              <div key={user.username} className="flex items-center gap-3">
                <div className="flex-none w-8 text-center font-medium text-muted-foreground">{user.rank}</div>
                <div className="flex-1 flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar} alt={user.username} />
                    <AvatarFallback>{user.username[0]}</AvatarFallback>
                  </Avatar>
                  <span>{user.username}</span>
                </div>
                <div className="flex-none w-20 text-right font-medium">{user.points}</div>
                <div className="flex-none w-24 text-right text-muted-foreground">{user.winRate}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
