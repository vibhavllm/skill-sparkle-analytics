import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Award, Target, Zap, BookOpen, Brain } from "lucide-react";

const Dashboard = () => {
  const stats = [
    { label: "Total Points", value: "12,847", icon: Zap, change: "+12%", trend: "up" },
    { label: "Badges Earned", value: "23", icon: Award, change: "+3", trend: "up" },
    { label: "Current Streak", value: "14 days", icon: Target, change: "Active", trend: "up" },
    { label: "Courses Active", value: "5", icon: BookOpen, change: "2 new", trend: "up" },
  ];

  const recentActivity = [
    { title: "Completed: Advanced Algorithms", points: 250, time: "2 hours ago", type: "success" },
    { title: "Badge Unlocked: Code Master", points: 500, time: "5 hours ago", type: "badge" },
    { title: "Ranked up to Gold III", points: 0, time: "1 day ago", type: "rank" },
  ];

  const aiInsights = [
    "Your mastery in Data Structures improved by 15% this week!",
    "You're in the top 5% for Database Management - keep it up!",
    "Focus on Algorithm Optimization to unlock the next tier achievement.",
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Welcome back, Alex!
        </h1>
        <p className="text-muted-foreground mt-2">Here's your learning journey snapshot</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, idx) => (
          <Card key={idx} className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stat.value}</div>
              <p className="text-xs text-success flex items-center gap-1 mt-1">
                <TrendingUp className="h-3 w-3" />
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* AI Insights */}
        <Card className="shadow-accent border-accent/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-accent" />
              AI Insights
            </CardTitle>
            <CardDescription>Personalized recommendations based on your progress</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {aiInsights.map((insight, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg bg-accent/5 border border-accent/20 text-sm"
              >
                {insight}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest achievements and milestones</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity, idx) => (
              <div key={idx} className="flex items-start gap-3 pb-3 border-b border-border/50 last:border-0 last:pb-0">
                <div className="flex-1">
                  <p className="font-medium">{activity.title}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
                {activity.points > 0 && (
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    +{activity.points} pts
                  </Badge>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Learning Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Current Course Progress</CardTitle>
          <CardDescription>Track your advancement across active courses</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { course: "Advanced Data Structures", progress: 78, color: "primary" },
            { course: "Machine Learning Fundamentals", progress: 45, color: "accent" },
            { course: "Cloud Architecture", progress: 62, color: "success" },
          ].map((item, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{item.course}</span>
                <span className="text-muted-foreground">{item.progress}%</span>
              </div>
              <Progress value={item.progress} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
