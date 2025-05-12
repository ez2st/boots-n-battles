
import { Header } from "@/components/layout/Header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThumbsUp, ThumbsDown, Share, MessageSquare, Mic, Users } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function BattleDetail() {
  const { id } = useParams();
  const [selectedContestant, setSelectedContestant] = useState<number | null>(null);
  
  // Mock data for the battle (in a real app would fetch based on id)
  const battleData = {
    id: "live1",
    status: "live" as const,
    round: 3,
    totalRounds: 5,
    startTime: "2023-06-10T15:00:00Z",
    contestant1: {
      id: "user1",
      username: "beatboxmaster",
      avatar: "https://source.unsplash.com/1605810230434-7631ac76ec81/150x150",
      points: 1250,
      votes: 64,
      specialties: ["Throat Bass", "Inward Bass", "Technical Patterns"]
    },
    contestant2: {
      id: "user2",
      username: "rhythmqueen",
      avatar: "https://source.unsplash.com/1721322800607-8c38375eef04/150x150",
      points: 980,
      votes: 48,
      specialties: ["Musicality", "Original Patterns", "Fast Combos"]
    },
    viewers: 235,
    comments: [
      {
        id: "c1",
        username: "bass_king",
        avatar: "https://source.unsplash.com/1605810230434-7631ac76ec81/150x150",
        text: "That inward bass in round 2 was insane! 🔥",
        timestamp: "5m ago"
      },
      {
        id: "c2",
        username: "loopstation_pro",
        avatar: "https://source.unsplash.com/1581092795360-fd1ca04f0952/150x150",
        text: "rhythmqueen is bringing some fresh patterns today",
        timestamp: "3m ago"
      },
      {
        id: "c3",
        username: "techbeats",
        avatar: "https://source.unsplash.com/1721322800607-8c38375eef04/150x150",
        text: "This is such a close battle! Hard to pick a winner",
        timestamp: "2m ago"
      }
    ]
  };

  const totalVotes = battleData.contestant1.votes + battleData.contestant2.votes;
  const contestant1Percentage = Math.round((battleData.contestant1.votes / totalVotes) * 100);
  const contestant2Percentage = Math.round((battleData.contestant2.votes / totalVotes) * 100);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 py-6 container">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="destructive" className="font-bold">LIVE</Badge>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Users className="h-3 w-3" /> {battleData.viewers} watching
              </span>
            </div>
            <h1 className="text-2xl font-bold">Battle: {battleData.contestant1.username} vs {battleData.contestant2.username}</h1>
            <p className="text-sm text-muted-foreground">Round {battleData.round} of {battleData.totalRounds}</p>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Share className="h-4 w-4" />
              Share
            </Button>
            <Button variant="secondary" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              Comment
            </Button>
          </div>
        </div>
        
        {/* Battle video container (placeholder) */}
        <div className="aspect-video rounded-lg bg-card flex items-center justify-center mb-6 relative border border-border overflow-hidden">
          <div 
            className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 flex items-center justify-center"
            style={{ 
              backgroundImage: `url(https://source.unsplash.com/1605810230434-7631ac76ec81)`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center'
            }}
          />
          
          <div className="relative z-10 text-center">
            <Badge variant="outline" className="mb-4 bg-background/20 backdrop-blur-sm">
              Round {battleData.round} in progress
            </Badge>
            <div className="flex items-center justify-center gap-6 mb-8">
              <Avatar className="h-20 w-20 border-4 border-primary">
                <AvatarImage src={battleData.contestant1.avatar} alt={battleData.contestant1.username} />
                <AvatarFallback>{battleData.contestant1.username[0]}</AvatarFallback>
              </Avatar>
              
              <div className="flex flex-col items-center">
                <div className="rounded-full border-4 border-muted h-12 w-12 flex items-center justify-center mb-2">
                  <Mic className="h-6 w-6 text-primary" />
                </div>
                <span className="text-white font-bold text-lg">VS</span>
              </div>
              
              <Avatar className="h-20 w-20 border-4 border-muted">
                <AvatarImage src={battleData.contestant2.avatar} alt={battleData.contestant2.username} />
                <AvatarFallback>{battleData.contestant2.username[0]}</AvatarFallback>
              </Avatar>
            </div>
            
            {/* Play button (in a real app would control video) */}
            <Button size="lg" className="gap-2">
              <Mic className="h-5 w-5" />
              Join Audio Stream
            </Button>
          </div>
        </div>
        
        {/* Voting section */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Vote for the Winner</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              {/* Contestant 1 */}
              <div 
                className={`flex-1 rounded-lg border ${selectedContestant === 1 ? 'border-primary bg-primary/5' : 'border-border'} p-4 cursor-pointer hover:bg-card/60 transition-colors`}
                onClick={() => setSelectedContestant(1)}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Avatar className="h-10 w-10 border border-border">
                    <AvatarImage src={battleData.contestant1.avatar} alt={battleData.contestant1.username} />
                    <AvatarFallback>{battleData.contestant1.username[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{battleData.contestant1.username}</h3>
                    <p className="text-xs text-muted-foreground">{battleData.contestant1.points} pts</p>
                  </div>
                </div>
                
                <div className="mb-3">
                  <h4 className="text-xs font-medium mb-1">Specialties</h4>
                  <div className="flex flex-wrap gap-1">
                    {battleData.contestant1.specialties.map(specialty => (
                      <span key={specialty} className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full gap-1"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <ThumbsUp className="h-3 w-3" /> {battleData.contestant1.votes}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full gap-1"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <ThumbsDown className="h-3 w-3" /> 0
                  </Button>
                </div>
              </div>
              
              {/* Contestant 2 */}
              <div 
                className={`flex-1 rounded-lg border ${selectedContestant === 2 ? 'border-primary bg-primary/5' : 'border-border'} p-4 cursor-pointer hover:bg-card/60 transition-colors`}
                onClick={() => setSelectedContestant(2)}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Avatar className="h-10 w-10 border border-border">
                    <AvatarImage src={battleData.contestant2.avatar} alt={battleData.contestant2.username} />
                    <AvatarFallback>{battleData.contestant2.username[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{battleData.contestant2.username}</h3>
                    <p className="text-xs text-muted-foreground">{battleData.contestant2.points} pts</p>
                  </div>
                </div>
                
                <div className="mb-3">
                  <h4 className="text-xs font-medium mb-1">Specialties</h4>
                  <div className="flex flex-wrap gap-1">
                    {battleData.contestant2.specialties.map(specialty => (
                      <span key={specialty} className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full gap-1"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <ThumbsUp className="h-3 w-3" /> {battleData.contestant2.votes}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full gap-1"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <ThumbsDown className="h-3 w-3" /> 0
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Voting progress */}
            <div>
              <div className="flex items-center justify-between mb-1 text-xs">
                <span>{contestant1Percentage}%</span>
                <span>Votes</span>
                <span>{contestant2Percentage}%</span>
              </div>
              <Progress value={contestant1Percentage} className="h-2 mb-4" />
              
              <Button 
                className="w-full" 
                disabled={selectedContestant === null}
              >
                Submit Vote for {selectedContestant === 1 ? battleData.contestant1.username : selectedContestant === 2 ? battleData.contestant2.username : ""}
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Live comments */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Live Comments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 mb-4">
              {battleData.comments.map(comment => (
                <div key={comment.id} className="flex items-start gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={comment.avatar} alt={comment.username} />
                    <AvatarFallback>{comment.username[0]}</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">{comment.username}</span>
                      <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
                    </div>
                    <p className="text-sm">{comment.text}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex gap-2">
              <input 
                type="text" 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Add a comment..."
              />
              <Button>Send</Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
