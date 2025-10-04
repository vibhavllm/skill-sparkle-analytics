import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Medal, Crown, TrendingUp } from "lucide-react";

const Leaderboard = () => {
  const globalLeaderboard = [
    { rank: 1, name: "Emma Chen", points: 24580, streak: 45, avatar: "EC", tier: "Platinum" },
    { rank: 2, name: "Marcus Rodriguez", points: 22340, streak: 38, avatar: "MR", tier: "Platinum" },
    { rank: 3, name: "Sarah Johnson", points: 19870, streak: 32, avatar: "SJ", tier: "Gold" },
    { rank: 4, name: "Alex Smith", points: 12847, streak: 14, avatar: "AS", tier: "Gold", isUser: true },
    { rank: 5, name: "David Park", points: 11920, streak: 28, avatar: "DP", tier: "Gold" },
    { rank: 6, name: "Lisa Wong", points: 10550, streak: 21, avatar: "LW", tier: "Silver" },
    { rank: 7, name: "James Taylor", points: 9870, streak: 19, avatar: "JT", tier: "Silver" },
    { rank: 8, name: "Nina Patel", points: 8940, streak: 25, avatar: "NP", tier: "Silver" },
  ];

  const courseLeaderboard = [
    { rank: 1, name: "Alex Smith", points: 2450, completion: 78, avatar: "AS", isUser: true },
    { rank: 2, name: "Emma Chen", points: 2380, completion: 75, avatar: "EC" },
    { rank: 3, name: "Marcus Rodriguez", points: 2120, completion: 71, avatar: "MR" },
  ];

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="h-5 w-5 text-warning" />;
    if (rank === 2) return <Medal className="h-5 w-5 text-muted-foreground" />;
    if (rank === 3) return <Medal className="h-5 w-5 text-warning/60" />;
    return <span className="text-muted-foreground font-medium">#{rank}</span>;
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "Platinum":
        return "bg-accent text-accent-foreground";
      case "Gold":
        return "bg-warning text-warning-foreground";
      case "Silver":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Leaderboard
        </h1>
        <p className="text-muted-foreground mt-2">See how you rank against other learners</p>
      </div>

      {/* User Rank Card */}
      <Card className="bg-gradient-primary text-white border-0 shadow-glow">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-2xl font-bold">
                AS
              </div>
              <div>
                <h3 className="text-2xl font-bold">Your Current Rank</h3>
                <p className="text-white/80">#4 Global • Gold III Tier</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold">12,847</div>
              <p className="text-white/80">Total Points</p>
              <div className="flex items-center gap-1 mt-2 justify-end">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm">+2 ranks this week</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="global" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="global">Global Rankings</TabsTrigger>
          <TabsTrigger value="course">Course Rankings</TabsTrigger>
        </TabsList>

        <TabsContent value="global" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                Global Leaderboard
              </CardTitle>
              <CardDescription>Top performers across all courses and activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {globalLeaderboard.map((user) => (
                  <div
                    key={user.rank}
                    className={`flex items-center gap-4 p-4 rounded-lg transition-all ${
                      user.isUser
                        ? "bg-primary/10 border-2 border-primary shadow-glow"
                        : "bg-gradient-card border border-border hover:shadow-card"
                    }`}
                  >
                    <div className="w-8 flex justify-center">
                      {getRankIcon(user.rank)}
                    </div>
                    <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                      {user.avatar}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{user.name}</h4>
                      <p className="text-sm text-muted-foreground">{user.streak}-day streak</p>
                    </div>
                    <Badge className={getTierColor(user.tier)}>{user.tier}</Badge>
                    <div className="text-right">
                      <div className="text-xl font-bold text-primary">{user.points.toLocaleString()}</div>
                      <p className="text-xs text-muted-foreground">points</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="course" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-accent" />
                Advanced Data Structures - Leaderboard
              </CardTitle>
              <CardDescription>Top performers in this course</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {courseLeaderboard.map((user) => (
                  <div
                    key={user.rank}
                    className={`flex items-center gap-4 p-4 rounded-lg transition-all ${
                      user.isUser
                        ? "bg-accent/10 border-2 border-accent shadow-accent"
                        : "bg-gradient-card border border-border hover:shadow-card"
                    }`}
                  >
                    <div className="w-8 flex justify-center">
                      {getRankIcon(user.rank)}
                    </div>
                    <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                      {user.avatar}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{user.name}</h4>
                      <p className="text-sm text-muted-foreground">{user.completion}% complete</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-accent">{user.points.toLocaleString()}</div>
                      <p className="text-xs text-muted-foreground">course points</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Leaderboard;
