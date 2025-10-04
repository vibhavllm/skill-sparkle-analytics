import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Calendar, Clock, TrendingUp, Eye, Download, Share2, ChevronRight } from "lucide-react";
import { toast } from "sonner";

const Exams = () => {
  const [selectedExam, setSelectedExam] = useState<string | null>(null);

  const exams = [
    {
      id: "1",
      title: "Data Structures Midterm",
      type: "Exam",
      course: "Advanced Data Structures",
      date: "2025-09-15",
      duration: "120 min",
      score: 88,
      maxScore: 100,
      grade: "A",
      status: "Graded",
      topics: ["Arrays", "Linked Lists", "Trees", "Graphs"],
      feedback: "Strong performance in graph algorithms. Review tree traversal concepts.",
    },
    {
      id: "2",
      title: "Algorithm Design Assignment #3",
      type: "Assignment",
      course: "Advanced Data Structures",
      date: "2025-09-22",
      duration: "N/A",
      score: 92,
      maxScore: 100,
      grade: "A",
      status: "Graded",
      topics: ["Dynamic Programming", "Greedy Algorithms"],
      feedback: "Excellent optimization approach. Clear code comments.",
    },
    {
      id: "3",
      title: "Machine Learning Quiz #2",
      type: "Quiz",
      course: "ML Fundamentals",
      date: "2025-09-28",
      duration: "45 min",
      score: 85,
      maxScore: 100,
      grade: "B+",
      status: "Graded",
      topics: ["Supervised Learning", "Neural Networks"],
      feedback: "Good understanding of concepts. Practice more on backpropagation.",
    },
    {
      id: "4",
      title: "Database Design Project",
      type: "Assignment",
      course: "Database Management",
      date: "2025-10-01",
      duration: "N/A",
      score: 95,
      maxScore: 100,
      grade: "A",
      status: "Graded",
      topics: ["SQL", "Normalization", "Indexing"],
      feedback: "Outstanding schema design and query optimization.",
    },
    {
      id: "5",
      title: "Cloud Architecture Final",
      type: "Exam",
      course: "Cloud Architecture",
      date: "2025-10-05",
      duration: "180 min",
      score: 0,
      maxScore: 100,
      grade: "Pending",
      status: "Submitted",
      topics: ["AWS", "Azure", "Microservices", "Containers"],
      feedback: null,
    },
  ];

  const assignments = [
    {
      id: "a1",
      title: "Sorting Algorithm Implementation",
      course: "Advanced Data Structures",
      dueDate: "2025-10-10",
      status: "In Progress",
      progress: 65,
      topics: ["Merge Sort", "Quick Sort"],
    },
    {
      id: "a2",
      title: "Neural Network Training Lab",
      course: "ML Fundamentals",
      dueDate: "2025-10-12",
      status: "Not Started",
      progress: 0,
      topics: ["TensorFlow", "CNN"],
    },
    {
      id: "a3",
      title: "Database Optimization Challenge",
      course: "Database Management",
      dueDate: "2025-10-15",
      status: "In Progress",
      progress: 40,
      topics: ["Query Optimization", "Indexing"],
    },
  ];

  const handleViewDetails = (examId: string) => {
    setSelectedExam(examId);
    toast.success("Exam details loaded");
  };

  const handleDownload = (examTitle: string) => {
    toast.success(`Downloaded: ${examTitle}`);
  };

  const handleShare = (examTitle: string) => {
    toast.success(`Shared: ${examTitle}`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Graded":
        return "bg-success text-success-foreground";
      case "Submitted":
        return "bg-primary text-primary-foreground";
      case "In Progress":
        return "bg-warning text-warning-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getGradeColor = (grade: string) => {
    if (grade === "A" || grade === "A+") return "text-success";
    if (grade === "B+" || grade === "B") return "text-primary";
    if (grade === "Pending") return "text-muted-foreground";
    return "text-warning";
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Exams & Assignments
          </h1>
          <p className="text-muted-foreground mt-2">Track your assessments and submissions</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-gradient-card shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Submissions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">5</div>
            <p className="text-xs text-muted-foreground mt-1">This semester</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Average Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">90%</div>
            <p className="text-xs text-success flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              +5% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pending Assignments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3</div>
            <p className="text-xs text-warning mt-1">Due this week</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Perfect Scores
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1</div>
            <p className="text-xs text-muted-foreground mt-1">95+ scores</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="completed" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
        </TabsList>

        <TabsContent value="completed" className="mt-6 space-y-4">
          {exams.filter(e => e.status !== "Not Started").map((exam) => (
            <Card key={exam.id} className="hover:shadow-glow transition-all cursor-pointer"
              onClick={() => handleViewDetails(exam.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{exam.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{exam.course}</p>
                        <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {exam.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {exam.duration}
                          </span>
                          <Badge variant="outline" className="text-xs">
                            {exam.type}
                          </Badge>
                          <Badge className={getStatusColor(exam.status)}>
                            {exam.status}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {exam.topics.map((topic, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-3">
                    <div className="text-right">
                      <div className={`text-3xl font-bold ${getGradeColor(exam.grade)}`}>
                        {exam.grade !== "Pending" ? exam.grade : "..."}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {exam.status === "Graded" ? `${exam.score}/${exam.maxScore}` : "Grading..."}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleViewDetails(exam.id);
                        }}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDownload(exam.title);
                        }}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShare(exam.title);
                        }}
                      >
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                {exam.feedback && (
                  <div className="mt-4 p-3 rounded-lg bg-accent/5 border border-accent/20">
                    <p className="text-sm font-medium text-accent">Instructor Feedback:</p>
                    <p className="text-sm text-muted-foreground mt-1">{exam.feedback}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="upcoming" className="mt-6 space-y-4">
          {assignments.map((assignment) => (
            <Card key={assignment.id} className="hover:shadow-card transition-all">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-warning/10">
                        <FileText className="h-6 w-6 text-warning" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{assignment.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{assignment.course}</p>
                        <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            Due: {assignment.dueDate}
                          </span>
                          <Badge className={getStatusColor(assignment.status)}>
                            {assignment.status}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {assignment.topics.map((topic, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                        <div className="mt-4 space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="font-medium">{assignment.progress}%</span>
                          </div>
                          <Progress value={assignment.progress} className="h-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90"
                      onClick={() => toast.success(`Opening: ${assignment.title}`)}
                    >
                      Continue
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>

      {/* Performance Trends */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Performance Trends
          </CardTitle>
          <CardDescription>Your assessment performance over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 rounded-lg bg-background border border-border">
              <h4 className="font-semibold mb-2">Best Subject</h4>
              <p className="text-2xl font-bold text-primary">Database Mgmt</p>
              <p className="text-sm text-muted-foreground mt-1">95% average</p>
            </div>
            <div className="p-4 rounded-lg bg-background border border-border">
              <h4 className="font-semibold mb-2">Improvement Needed</h4>
              <p className="text-2xl font-bold text-warning">ML Fundamentals</p>
              <p className="text-sm text-muted-foreground mt-1">85% average</p>
            </div>
            <div className="p-4 rounded-lg bg-background border border-border">
              <h4 className="font-semibold mb-2">Recent Trend</h4>
              <p className="text-2xl font-bold text-success flex items-center gap-1">
                <TrendingUp className="h-5 w-5" />
                +5%
              </p>
              <p className="text-sm text-muted-foreground mt-1">vs last month</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Exams;
