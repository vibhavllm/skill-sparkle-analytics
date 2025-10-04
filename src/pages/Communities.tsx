import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MessageCircle, TrendingUp, BookOpen, Code, Database, Brain, Cloud } from "lucide-react";

const Communities = () => {
  const joinedCommunities = [
    {
      name: "Algorithm Enthusiasts",
      members: 2847,
      online: 342,
      icon: Code,
      description: "Discuss algorithms, data structures, and competitive programming",
      activity: "Very Active",
      newPosts: 24,
    },
    {
      name: "Database Masters",
      members: 1523,
      online: 189,
      icon: Database,
      description: "SQL, NoSQL, database design, and optimization",
      activity: "Active",
      newPosts: 12,
    },
    {
      name: "ML & AI Researchers",
      members: 3241,
      online: 421,
      icon: Brain,
      description: "Machine learning, deep learning, and AI research",
      activity: "Very Active",
      newPosts: 38,
    },
  ];

  const suggestedCommunities = [
    {
      name: "Cloud Architecture Hub",
      members: 1876,
      online: 234,
      icon: Cloud,
      description: "AWS, Azure, GCP, and cloud-native solutions",
      activity: "Active",
      matchScore: 85,
    },
    {
      name: "Study Group - Advanced DS",
      members: 456,
      online: 67,
      icon: BookOpen,
      description: "Collaborative learning for Advanced Data Structures course",
      activity: "Moderate",
      matchScore: 92,
    },
  ];

  const recentDiscussions = [
    {
      community: "Algorithm Enthusiasts",
      title: "Best approach for dynamic programming problems?",
      author: "Emma Chen",
      replies: 23,
      time: "2 hours ago",
    },
    {
      community: "Database Masters",
      title: "PostgreSQL vs MySQL for large-scale apps",
      author: "Marcus Rodriguez",
      replies: 15,
      time: "4 hours ago",
    },
    {
      community: "ML & AI Researchers",
      title: "New paper on transformer architecture",
      author: "Sarah Johnson",
      replies: 31,
      time: "6 hours ago",
    },
  ];

  const getActivityColor = (activity: string) => {
    switch (activity) {
      case "Very Active":
        return "bg-success text-success-foreground";
      case "Active":
        return "bg-primary text-primary-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Communities
          </h1>
          <p className="text-muted-foreground mt-2">Connect with learners who share your interests</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 w-fit">
          <Users className="mr-2 h-4 w-4" />
          Create Community
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-gradient-card shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Communities Joined
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3</div>
            <p className="text-xs text-muted-foreground mt-1">Actively participating</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Discussions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">147</div>
            <p className="text-xs text-success flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              +23 this week
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Helpful Answers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">89</div>
            <p className="text-xs text-muted-foreground mt-1">Community contributions</p>
          </CardContent>
        </Card>
      </div>

      {/* Joined Communities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Your Communities
          </CardTitle>
          <CardDescription>Communities you're actively participating in</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {joinedCommunities.map((community, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg border border-border bg-gradient-card hover:shadow-card transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <community.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-lg">{community.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{community.description}</p>
                      <div className="flex items-center gap-3 mt-3">
                        <span className="text-sm text-muted-foreground">
                          {community.members.toLocaleString()} members
                        </span>
                        <span className="text-sm text-success">
                          • {community.online} online
                        </span>
                        <Badge className={getActivityColor(community.activity)}>
                          {community.activity}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge variant="secondary" className="bg-accent/10 text-accent">
                        {community.newPosts} new posts
                      </Badge>
                      <Button size="sm" variant="outline">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Suggested Communities */}
      <Card className="border-accent/20 bg-accent/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-accent" />
            Suggested for You
          </CardTitle>
          <CardDescription>Based on your interests and activity</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {suggestedCommunities.map((community, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg border border-border bg-background hover:shadow-card transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <community.icon className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-lg">{community.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{community.description}</p>
                      <div className="flex items-center gap-3 mt-3">
                        <span className="text-sm text-muted-foreground">
                          {community.members.toLocaleString()} members
                        </span>
                        <span className="text-sm text-success">
                          • {community.online} online
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge className="bg-accent text-accent-foreground">
                        {community.matchScore}% match
                      </Badge>
                      <Button size="sm" className="bg-accent hover:bg-accent/90">
                        Join Community
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Recent Discussions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-primary" />
            Recent Discussions
          </CardTitle>
          <CardDescription>Hot topics from your communities</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {recentDiscussions.map((discussion, idx) => (
            <div
              key={idx}
              className="p-3 rounded-lg border border-border hover:bg-muted/50 transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-medium">{discussion.title}</h4>
                  <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                    <span className="text-primary font-medium">{discussion.community}</span>
                    <span>•</span>
                    <span>by {discussion.author}</span>
                    <span>•</span>
                    <span>{discussion.time}</span>
                  </div>
                </div>
                <Badge variant="secondary">
                  {discussion.replies} replies
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Communities;
