import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Award, Lock, Trophy, Star, Zap, Target } from "lucide-react";

const Badges = () => {
  const earnedBadges = [
    {
      name: "Code Master",
      description: "Complete 50 coding challenges",
      points: 500,
      rarity: "Legendary",
      progress: 100,
      icon: Trophy,
      date: "2025-09-15",
    },
    {
      name: "Algorithm Expert",
      description: "Master 10 advanced algorithms",
      points: 300,
      rarity: "Epic",
      progress: 100,
      icon: Star,
      date: "2025-08-22",
    },
    {
      name: "Quick Learner",
      description: "Complete a course in under 2 weeks",
      points: 150,
      rarity: "Rare",
      progress: 100,
      icon: Zap,
      date: "2025-07-10",
    },
  ];

  const inProgress = [
    {
      name: "Database Wizard",
      description: "Complete 30 database exercises",
      points: 400,
      rarity: "Epic",
      progress: 73,
      icon: Target,
      remaining: "8 more exercises",
    },
    {
      name: "Team Player",
      description: "Collaborate on 5 group projects",
      points: 250,
      rarity: "Rare",
      progress: 60,
      icon: Award,
      remaining: "2 more projects",
    },
  ];

  const locked = [
    {
      name: "AI Pioneer",
      description: "Complete the Advanced ML course with 90%+",
      points: 600,
      rarity: "Legendary",
      requirement: "Unlock at level 15",
      icon: Lock,
    },
    {
      name: "Marathon Runner",
      description: "Maintain a 30-day learning streak",
      points: 350,
      rarity: "Epic",
      requirement: "16 more days",
      icon: Lock,
    },
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Legendary":
        return "bg-gradient-to-r from-primary to-accent text-white";
      case "Epic":
        return "bg-accent text-accent-foreground";
      case "Rare":
        return "bg-primary text-primary-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Badges & Achievements
        </h1>
        <p className="text-muted-foreground mt-2">Track your accomplishments and milestones</p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-gradient-card shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Badges</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">23</div>
            <p className="text-xs text-success mt-1">+3 this month</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Points</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">8,450</div>
            <p className="text-xs text-success mt-1">From badges</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Rarest Badge</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">Code Master</div>
            <Badge className="mt-2 bg-gradient-to-r from-primary to-accent text-white">
              Legendary
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* Earned Badges */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-primary" />
            Earned Badges
          </CardTitle>
          <CardDescription>Your completed achievements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {earnedBadges.map((badge, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg border border-border bg-gradient-card hover:shadow-glow transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className={`p-3 rounded-lg ${getRarityColor(badge.rarity)}`}>
                    <badge.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{badge.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{badge.description}</p>
                    <div className="flex items-center gap-2 mt-3">
                      <Badge variant="secondary" className="text-xs">
                        +{badge.points} pts
                      </Badge>
                      <span className="text-xs text-muted-foreground">{badge.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* In Progress */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            In Progress
          </CardTitle>
          <CardDescription>Badges you're working towards</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {inProgress.map((badge, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-background border border-border">
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <badge.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">{badge.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{badge.description}</p>
                    </div>
                    <Badge className={getRarityColor(badge.rarity)}>{badge.rarity}</Badge>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{badge.remaining}</span>
                  <span className="font-medium">{badge.progress}%</span>
                </div>
                <Progress value={badge.progress} className="h-2" />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Locked Badges */}
      <Card className="border-muted">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5 text-muted-foreground" />
            Locked Achievements
          </CardTitle>
          <CardDescription>Future milestones to unlock</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {locked.map((badge, idx) => (
              <div key={idx} className="p-4 rounded-lg border border-dashed border-muted bg-muted/5">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-muted/20">
                    <badge.icon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="flex-1 opacity-60">
                    <h3 className="font-semibold">{badge.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{badge.description}</p>
                    <div className="flex items-center gap-2 mt-3">
                      <Badge variant="outline" className="text-xs">
                        {badge.points} pts
                      </Badge>
                      <span className="text-xs text-muted-foreground">{badge.requirement}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Badges;
