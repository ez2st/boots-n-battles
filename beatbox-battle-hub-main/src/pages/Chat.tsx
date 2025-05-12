
import { Header } from "@/components/layout/Header";
import { ChatBox } from "@/components/chat/ChatBox";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock chat data
const mockMessages = {
  general: [
    {
      id: "msg1",
      userId: "user1",
      username: "beatboxmaster",
      avatar: "https://source.unsplash.com/1605810230434-7631ac76ec81/150x150",
      text: "Hey everyone! Did you catch that insane battle between D-low and Codfish yesterday?",
      timestamp: "10:23 AM"
    },
    {
      id: "msg2",
      userId: "user2",
      username: "rhythmqueen",
      avatar: "https://source.unsplash.com/1721322800607-8c38375eef04/150x150",
      text: "Yeah! That throat bass matchup in the third round was next level 🔥",
      timestamp: "10:25 AM"
    },
    {
      id: "msg3",
      userId: "user3",
      username: "loopstation_pro",
      avatar: "https://source.unsplash.com/1581092795360-fd1ca04f0952/150x150",
      text: "Does anyone have tips for improving inward bass without hurting your throat?",
      timestamp: "10:30 AM"
    },
    {
      id: "msg4",
      userId: "user1",
      username: "beatboxmaster",
      avatar: "https://source.unsplash.com/1605810230434-7631ac76ec81/150x150",
      text: "Start with short sessions and lots of water. It takes time to build up those muscles!",
      timestamp: "10:32 AM"
    }
  ],
  techniques: [
    {
      id: "tech1",
      userId: "user5",
      username: "vocal_percussionist",
      avatar: "https://source.unsplash.com/1721322800607-8c38375eef04/150x150",
      text: "I've been working on polyphonic sounds for weeks. Any tutorials you'd recommend?",
      timestamp: "9:15 AM"
    },
    {
      id: "tech2",
      userId: "user6",
      username: "beatrhyme",
      avatar: "https://source.unsplash.com/1581092795360-fd1ca04f0952/150x150",
      text: "Check out Codfish's YouTube channel. He has a great breakdown of the basics.",
      timestamp: "9:20 AM"
    },
    {
      id: "tech3",
      userId: "user1",
      username: "beatboxmaster",
      avatar: "https://source.unsplash.com/1605810230434-7631ac76ec81/150x150",
      text: "And don't forget to record yourself practicing. It helps a lot with identifying areas for improvement.",
      timestamp: "9:25 AM"
    }
  ],
  battles: [
    {
      id: "battle1",
      userId: "user7",
      username: "rhythm_innovator",
      avatar: "https://source.unsplash.com/1605810230434-7631ac76ec81/150x150",
      text: "Anyone want to do a quick friendly battle tonight? I'm trying to work on my tech patterns.",
      timestamp: "11:05 AM"
    },
    {
      id: "battle2",
      userId: "user8",
      username: "techbeats",
      avatar: "https://source.unsplash.com/1721322800607-8c38375eef04/150x150",
      text: "I'm down! Let's set it up for 8PM EST? 2 rounds each?",
      timestamp: "11:10 AM"
    },
    {
      id: "battle3",
      userId: "user7",
      username: "rhythm_innovator",
      avatar: "https://source.unsplash.com/1605810230434-7631ac76ec81/150x150",
      text: "Perfect! Looking forward to it! 🎤",
      timestamp: "11:12 AM"
    }
  ]
};

export default function Chat() {
  const [messages, setMessages] = useState({
    general: [...mockMessages.general],
    techniques: [...mockMessages.techniques],
    battles: [...mockMessages.battles]
  });

  const handleSendMessage = (channel: 'general' | 'techniques' | 'battles', text: string) => {
    const newMessage = {
      id: `msg${Date.now()}`,
      userId: "current-user", // In a real app, this would be the logged-in user's ID
      username: "You", // In a real app, this would be the logged-in user's username
      avatar: "https://source.unsplash.com/1605810230434-7631ac76ec81/150x150", // In a real app, this would be the logged-in user's avatar
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => ({
      ...prev,
      [channel]: [...prev[channel], newMessage]
    }));
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 py-6 container">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Community Chat</h1>
          <p className="text-sm text-muted-foreground">Connect with other beatboxers</p>
        </div>
        
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="techniques">Techniques</TabsTrigger>
            <TabsTrigger value="battles">Battles</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general" className="mt-6">
            <ChatBox 
              title="General Chat" 
              messages={messages.general}
              onSendMessage={(text) => handleSendMessage('general', text)}
            />
          </TabsContent>
          
          <TabsContent value="techniques" className="mt-6">
            <ChatBox 
              title="Techniques Discussion" 
              messages={messages.techniques}
              onSendMessage={(text) => handleSendMessage('techniques', text)}
            />
          </TabsContent>
          
          <TabsContent value="battles" className="mt-6">
            <ChatBox 
              title="Battle Coordination" 
              messages={messages.battles}
              onSendMessage={(text) => handleSendMessage('battles', text)}
            />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
