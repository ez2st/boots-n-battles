
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Mic, Users } from "lucide-react";
import { Link } from "react-router-dom";

interface BattleCardProps {
  id: string;
  status: "upcoming" | "live" | "completed";
  contestant1: {
    id: string;
    username: string;
    avatar: string;
    points: number;
    votes?: number;
  };
  contestant2: {
    id: string;
    username: string;
    avatar: string;
    points: number;
    votes?: number;
  };
  scheduledFor?: string;
  viewers?: number;
  winnerIds?: string[];
}

export function BattleCard({
  id,
  status,
  contestant1,
  contestant2,
  scheduledFor,
  viewers = 0,
  winnerIds = [],
}: BattleCardProps) {
  const totalVotes = (contestant1.votes || 0) + (contestant2.votes || 0);
  const contestant1Percentage = totalVotes > 0 ? Math.round((contestant1.votes || 0) / totalVotes * 100) : 50;
  const contestant2Percentage = totalVotes > 0 ? Math.round((contestant2.votes || 0) / totalVotes * 100) : 50;
  
  const isWinner1 = winnerIds.includes(contestant1.id);
  const isWinner2 = winnerIds.includes(contestant2.id);

  return (
    <div className={`rounded-lg border border-border bg-card p-4 ${status === 'live' ? 'animate-[battle-flash_2s_ease-in-out_infinite]' : ''}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {status === "upcoming" && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground">
              Upcoming
            </span>
          )}
          {status === "live" && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-destructive text-destructive-foreground">
              LIVE
            </span>
          )}
          {status === "completed" && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/20 text-primary">
              Completed
            </span>
          )}
          
          {status === "upcoming" && scheduledFor && (
            <span className="text-xs text-muted-foreground">
              Starts in {scheduledFor}
            </span>
          )}
          
          {status === "live" && (
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Users className="h-3 w-3" /> {viewers} watching
            </span>
          )}
        </div>
        
        <Link to={`/battles/${id}`}>
          <Button variant="ghost" size="sm">
            {status === "live" ? "Join" : "Details"}
          </Button>
        </Link>
      </div>
      
      <div className="flex items-center gap-4 mb-6">
        {/* Contestant 1 */}
        <div className={`flex-1 flex flex-col items-center ${isWinner1 ? 'scale-110 transition-transform' : ''}`}>
          <Avatar className={`h-16 w-16 mb-2 border-2 ${isWinner1 ? 'border-primary' : 'border-border'}`}>
            <AvatarImage src={contestant1.avatar} alt={contestant1.username} />
            <AvatarFallback>{contestant1.username[0]}</AvatarFallback>
          </Avatar>
          <span className="font-medium text-sm">{contestant1.username}</span>
          <span className="text-xs text-muted-foreground">{contestant1.points} pts</span>
          
          {isWinner1 && (
            <span className="mt-1 text-xs text-primary font-medium">Winner!</span>
          )}
        </div>
        
        {/* VS */}
        <div className="relative">
          <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
            <Mic className="h-6 w-6 text-primary" />
          </div>
          <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs font-bold">VS</span>
        </div>
        
        {/* Contestant 2 */}
        <div className={`flex-1 flex flex-col items-center ${isWinner2 ? 'scale-110 transition-transform' : ''}`}>
          <Avatar className={`h-16 w-16 mb-2 border-2 ${isWinner2 ? 'border-primary' : 'border-border'}`}>
            <AvatarImage src={contestant2.avatar} alt={contestant2.username} />
            <AvatarFallback>{contestant2.username[0]}</AvatarFallback>
          </Avatar>
          <span className="font-medium text-sm">{contestant2.username}</span>
          <span className="text-xs text-muted-foreground">{contestant2.points} pts</span>
          
          {isWinner2 && (
            <span className="mt-1 text-xs text-primary font-medium">Winner!</span>
          )}
        </div>
      </div>
      
      {/* Voting progress for live or completed battles */}
      {(status === "live" || status === "completed") && (
        <div className="mt-4">
          <div className="flex items-center justify-between mb-1 text-xs">
            <span>{contestant1Percentage}%</span>
            <span>Votes</span>
            <span>{contestant2Percentage}%</span>
          </div>
          <Progress value={contestant1Percentage} className="h-2" />
          
          {status === "live" && (
            <div className="flex justify-between mt-3">
              <Button variant="outline" size="sm" className="flex-1 mr-1">
                Vote {contestant1.username}
              </Button>
              <Button variant="outline" size="sm" className="flex-1 ml-1">
                Vote {contestant2.username}
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
