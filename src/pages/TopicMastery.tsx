import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Brain, TrendingUp, AlertCircle, CheckCircle, Lightbulb } from "lucide-react";

const TopicMastery = () => {
  const topics = [
    {
      name: "Arrays & Strings",
      mastery: 95,
      trend: "up",
      misconceptions: 0,
      exercises: { completed: 38, total: 40 },
      lastPracticed: "Today",
      status: "Mastered",
    },
    {
      name: "Graph Algorithms",
      mastery: 78,
      trend: "up",
      misconceptions: 2,
      exercises: { completed: 23, total: 30 },
      lastPracticed: "Yesterday",
      status: "Strong",
    },
    {
      name: "Dynamic Programming",
      mastery: 62,
      trend: "stable",
      misconceptions: 5,
      exercises: { completed: 15, total: 25 },
      lastPracticed: "2 days ago",
      status: "Developing",
    },
    {
      name: "Binary Search Trees",
      mastery: 45,
      trend: "up",
      misconceptions: 8,
      exercises: { completed: 9, total: 20 },
      lastPracticed: "1 week ago",
      status: "Needs Work",
    },
  ];

  const misconceptions = [
    {
      topic: "Dynamic Programming",
      issue: "Overlapping subproblems identification",
      frequency: "High",
      resources: 3,
    },
    {
      topic: "Binary Search Trees",
      issue: "Balancing vs. searching complexity",
      frequency: "Medium",
      resources: 2,
    },
  ];

  const recommendations = [
    {
      topic: "Binary Search Trees",
      action: "Complete 5 more exercises on tree rotations",
      priority: "High",
      estimatedTime: "2 hours",
    },
    {
      topic: "Dynamic Programming",
      action: "Review memoization vs tabulation patterns",
      priority: "Medium",
      estimatedTime: "1 hour",
    },
    {
      topic: "Graph Algorithms",
      action: "Practice Dijkstra's algorithm variations",
      priority: "Low",
      estimatedTime: "1.5 hours",
    },
  ];

  const getMasteryColor = (mastery: number) => {
    if (mastery >= 85) return "text-success";
    if (mastery >= 70) return "text-primary";
    if (mastery >= 50) return "text-warning";
    return "text-destructive";
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, string> = {
      Mastered: "bg-success text-success-foreground",
      Strong: "bg-primary text-primary-foreground",
      Developing: "bg-warning text-warning-foreground",
      "Needs Work": "bg-destructive/20 text-destructive",
    };
    return variants[status] || "bg-secondary text-secondary-foreground";
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Topic Mastery
        </h1>
        <p className="text-muted-foreground mt-2">Deep insights into your subject understanding</p>
      </div>

      {/* Overview Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-gradient-card shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Average Mastery
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">70%</div>
            <p className="text-xs text-success flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              +8% this month
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Topics Mastered
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1/4</div>
            <p className="text-xs text-muted-foreground mt-1">In current course</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Misconceptions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">15</div>
            <p className="text-xs text-warning mt-1">Need attention</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Study Streak
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">14</div>
            <p className="text-xs text-muted-foreground mt-1">Consecutive days</p>
          </CardContent>
        </Card>
      </div>

      {/* Topic Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            Topic-Level Understanding
          </CardTitle>
          <CardDescription>Detailed mastery breakdown for Advanced Data Structures</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {topics.map((topic, idx) => (
            <div key={idx} className="space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold text-lg">{topic.name}</h3>
                    <Badge className={getStatusBadge(topic.status)}>{topic.status}</Badge>
                    {topic.misconceptions > 0 && (
                      <Badge variant="outline" className="text-warning border-warning">
                        {topic.misconceptions} misconceptions
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span>
                      {topic.exercises.completed}/{topic.exercises.total} exercises
                    </span>
                    <span>•</span>
                    <span>Last practiced: {topic.lastPracticed}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-3xl font-bold ${getMasteryColor(topic.mastery)}`}>
                    {topic.mastery}%
                  </div>
                  <p className="text-xs text-muted-foreground">mastery</p>
                </div>
              </div>
              <Progress value={topic.mastery} className="h-3" />
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Misconceptions */}
        <Card className="border-warning/20 bg-warning/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-warning" />
              Common Misconceptions
            </CardTitle>
            <CardDescription>Areas where you frequently make errors</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {misconceptions.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-background border border-warning/20"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-semibold">{item.topic}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{item.issue}</p>
                    <Badge variant="outline" className="mt-2 text-xs">
                      {item.resources} resources available
                    </Badge>
                  </div>
                  <Badge
                    className={
                      item.frequency === "High"
                        ? "bg-destructive text-destructive-foreground"
                        : "bg-warning text-warning-foreground"
                    }
                  >
                    {item.frequency}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* AI Recommendations */}
        <Card className="border-accent/20 bg-accent/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-accent" />
              Adaptive Learning Path
            </CardTitle>
            <CardDescription>AI-generated recommendations to improve mastery</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recommendations.map((rec, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-background border border-accent/20"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="font-semibold text-sm">{rec.topic}</h4>
                      <Badge
                        variant={rec.priority === "High" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {rec.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{rec.action}</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      ⏱️ Estimated: {rec.estimatedTime}
                    </p>
                  </div>
                  <CheckCircle className="h-5 w-5 text-muted-foreground hover:text-success cursor-pointer transition-colors" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Performance Prediction */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Performance Forecast
          </CardTitle>
          <CardDescription>AI-predicted outcomes based on current trajectory</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg bg-background border border-primary/20">
            <h4 className="font-semibold mb-2">Next Assessment Prediction</h4>
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Based on current mastery levels and practice frequency
              </p>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">85-92%</div>
                <p className="text-xs text-muted-foreground">Expected score range</p>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-lg bg-background border border-primary/20">
            <h4 className="font-semibold mb-2">Course Completion Forecast</h4>
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                At your current pace and engagement level
              </p>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">3-4 weeks</div>
                <p className="text-xs text-muted-foreground">Estimated completion</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TopicMastery;
