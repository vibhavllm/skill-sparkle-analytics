import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Share2, Download, Award, Code, Database, Cloud, Brain, Users } from "lucide-react";
import { LinkedInExportDialog } from "@/components/LinkedInExportDialog";
import { toast } from "sonner";

const SkillBeacon = () => {
  const skills = [
    { name: "Data Structures & Algorithms", level: 85, icon: Code, projects: 12 },
    { name: "Database Management", level: 92, icon: Database, projects: 8 },
    { name: "Cloud Architecture", level: 68, icon: Cloud, projects: 5 },
    { name: "Machine Learning", level: 74, icon: Brain, projects: 7 },
  ];

  const achievements = [
    { title: "Code Master", date: "2025-09", rarity: "Legendary" },
    { title: "Algorithm Expert", date: "2025-08", rarity: "Epic" },
    { title: "Database Guru", date: "2025-07", rarity: "Rare" },
    { title: "Quick Learner", date: "2025-06", rarity: "Common" },
  ];

  const handleLinkedInExport = () => {
    toast.success("SkillBeacon exported! Ready to share on LinkedIn");
  };

  const handleDownload = () => {
    toast.success("Portfolio PDF downloaded successfully!");
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            SkillBeacon Portfolio
          </h1>
          <p className="text-muted-foreground mt-2">Your verified learning journey</p>
        </div>
        <div className="flex gap-2">
          <LinkedInExportDialog />
          <Button onClick={handleDownload} variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
          <Button variant="outline" size="icon">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Profile Overview */}
      <Card className="bg-gradient-hero text-white border-0 shadow-glow">
        <CardContent className="pt-6">
          <div className="flex items-center gap-6">
            <div className="h-24 w-24 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-4xl font-bold">
              AS
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold">Alex Smith</h2>
              <p className="text-white/80 mt-1">Computer Science Student • Gold III Rank</p>
              <div className="flex gap-2 mt-3">
                <Badge className="bg-white/20 text-white border-white/30">
                  12,847 Total Points
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30">
                  23 Badges
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30">
                  Top 5% Overall
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Skills Mastery */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5 text-primary" />
            Core Skills Mastery
          </CardTitle>
          <CardDescription>Domain expertise verified through coursework and projects</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {skills.map((skill, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <skill.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{skill.name}</p>
                    <p className="text-xs text-muted-foreground">{skill.projects} projects completed</p>
                  </div>
                </div>
                <span className="text-lg font-bold text-primary">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Top Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-accent" />
            Featured Achievements
          </CardTitle>
          <CardDescription>Verified badges and certifications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg border border-border bg-gradient-card hover:shadow-card transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{achievement.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">Earned: {achievement.date}</p>
                    <Badge
                      className="mt-2"
                      variant={
                        achievement.rarity === "Legendary"
                          ? "default"
                          : achievement.rarity === "Epic"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {achievement.rarity}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Career Insights */}
      <Card className="border-success/20 bg-success/5">
        <CardHeader>
          <CardTitle className="text-success">Career Correlation Insights</CardTitle>
          <CardDescription>How your skills align with industry demand</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-background rounded-lg">
            <span className="font-medium">Software Engineering</span>
            <Badge className="bg-success text-success-foreground">95% Match</Badge>
          </div>
          <div className="flex items-center justify-between p-3 bg-background rounded-lg">
            <span className="font-medium">Data Science</span>
            <Badge className="bg-success text-success-foreground">88% Match</Badge>
          </div>
          <div className="flex items-center justify-between p-3 bg-background rounded-lg">
            <span className="font-medium">Cloud Solutions Architect</span>
            <Badge className="bg-warning text-warning-foreground">72% Match</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Community Recommendations */}
      <Card className="border-accent/20 bg-gradient-purple-bg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-accent" />
            Recommended Communities
          </CardTitle>
          <CardDescription>Based on your skills and interests</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { name: "Database Masters", match: 95, members: 1523, reason: "Your Database Management expertise" },
              { name: "ML & AI Researchers", match: 88, members: 3241, reason: "Your Machine Learning progress" },
            ].map((community, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-background border border-accent/20 hover:shadow-card transition-all cursor-pointer"
                onClick={() => toast.success(`Joining ${community.name}...`)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-semibold">{community.name}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{community.reason}</p>
                    <p className="text-xs text-muted-foreground mt-2">{community.members} members</p>
                  </div>
                  <Badge className="bg-accent text-accent-foreground">{community.match}% match</Badge>
                </div>
                <Button size="sm" className="w-full mt-3 bg-accent hover:bg-accent/90" onClick={(e) => {
                  e.stopPropagation();
                  toast.success(`Joined ${community.name}!`);
                }}>
                  Join Community
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SkillBeacon;
