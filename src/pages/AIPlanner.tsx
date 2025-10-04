import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ListTodo,
  Sparkles,
  Calendar,
  Clock,
  Plus,
  Brain,
  Target,
  TrendingUp,
  CheckCircle2,
  Circle,
  Trash2,
  Star,
  FolderKanban,
} from "lucide-react";
import { toast } from "sonner";

const AIPlanner = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Complete Data Structures Mid-term Prep",
      description: "Review binary trees, heaps, and graph algorithms",
      priority: "High",
      dueDate: new Date().toISOString().split('T')[0],
      category: "Study",
      course: "Advanced Data Structures",
      completed: false,
      aiGenerated: true,
    },
    {
      id: "2",
      title: "Submit Machine Learning Assignment 3",
      description: "Complete neural network training and submit report",
      priority: "High",
      dueDate: new Date().toISOString().split('T')[0],
      category: "Assignment",
      course: "ML Fundamentals",
      completed: false,
      aiGenerated: true,
    },
    {
      id: "3",
      title: "Attend Algorithm Study Group",
      description: "Group session on dynamic programming patterns",
      priority: "Medium",
      dueDate: new Date().toISOString().split('T')[0],
      category: "Study",
      course: "Advanced Data Structures",
      completed: false,
      aiGenerated: false,
    },
    {
      id: "4",
      title: "Review Database Indexing Concepts",
      description: "Prepare for tomorrow's quiz on B-trees and indexing",
      priority: "High",
      dueDate: new Date().toISOString().split('T')[0],
      category: "Study",
      course: "Database Management",
      completed: false,
      aiGenerated: true,
    },
    {
      id: "5",
      title: "Work on E-commerce Platform MVP",
      description: "Implement user authentication module",
      priority: "Medium",
      dueDate: new Date().toISOString().split('T')[0],
      category: "Project",
      course: "Personal Project",
      completed: false,
      aiGenerated: false,
    },
    {
      id: "6",
      title: "Practice Sorting Algorithm Problems",
      description: "Complete LeetCode exercises on merge and quick sort",
      priority: "Low",
      dueDate: new Date().toISOString().split('T')[0],
      category: "Practice",
      course: "Self Study",
      completed: true,
      aiGenerated: true,
    },
    {
      id: "7",
      title: "Review Graph Algorithms",
      description: "Study Dijkstra's and Bellman-Ford algorithms",
      priority: "Medium",
      dueDate: "2025-10-12",
      category: "Study",
      course: "Advanced Data Structures",
      completed: false,
      aiGenerated: true,
    },
    {
      id: "8",
      title: "Database Query Optimization",
      description: "Optimize slow queries from assignment feedback",
      priority: "Medium",
      dueDate: "2025-10-15",
      category: "Assignment",
      course: "Database Management",
      completed: false,
      aiGenerated: true,
    },
  ]);

  const [projects, setProjects] = useState([
    {
      id: "p1",
      name: "E-commerce Platform MVP",
      description: "Build a full-stack e-commerce application with React and Node.js",
      progress: 65,
      deadline: "2025-11-15",
      status: "In Progress",
      tasks: 12,
      completedTasks: 8,
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      id: "p2",
      name: "Machine Learning Image Classifier",
      description: "Train a CNN model to classify images with 90%+ accuracy",
      progress: 40,
      deadline: "2025-11-20",
      status: "In Progress",
      tasks: 8,
      completedTasks: 3,
      tags: ["Python", "TensorFlow", "CNN"],
    },
    {
      id: "p3",
      name: "Personal Portfolio Website",
      description: "Create a responsive portfolio showcasing all projects",
      progress: 100,
      deadline: "2025-09-30",
      status: "Completed",
      tasks: 6,
      completedTasks: 6,
      tags: ["React", "Tailwind", "Vercel"],
    },
  ]);

  const [newTask, setNewTask] = useState("");

  const aiSuggestions = [
    "Focus on Dynamic Programming this week - you have 5 misconceptions to clear",
    "Schedule 2 hours for Database Optimization before the deadline",
    "Review tree traversal before the upcoming exam on Oct 15",
    "Join the 'Algorithm Enthusiasts' study group session tomorrow",
  ];

  const handleToggleTask = (taskId: string) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
    toast.success(tasks.find(t => t.id === taskId)?.completed ? "Task reopened" : "Task completed! 🎉");
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
    toast.success("Task deleted");
  };

  const handleGenerateAITasks = () => {
    toast.success("AI is generating personalized tasks based on your progress...");
    setTimeout(() => {
      const aiTask = {
        id: Date.now().toString(),
        title: "Practice Binary Search Tree Rotations",
        description: "AI suggests focusing on this weak area",
        priority: "High",
        dueDate: "2025-10-13",
        category: "Study",
        course: "Advanced Data Structures",
        completed: false,
        aiGenerated: true,
      };
      setTasks([...tasks, aiTask]);
      toast.success("AI task added! ✨");
    }, 1500);
  };

  const handleAddTask = (customTitle?: string) => {
    const taskTitle = customTitle || newTask;
    if (!taskTitle.trim()) return;
    
    const task = {
      id: Date.now().toString(),
      title: taskTitle,
      description: "",
      priority: "Medium",
      dueDate: new Date().toISOString().split('T')[0], // Set to today
      category: "Task",
      course: "General",
      completed: false,
      aiGenerated: false,
    };
    
    setTasks([...tasks, task]);
    setNewTask("");
    toast.success("Task added to Today! ✨");
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-destructive text-destructive-foreground";
      case "Medium":
        return "bg-warning text-warning-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-success text-success-foreground";
      case "In Progress":
        return "bg-primary text-primary-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const todayStr = new Date().toISOString().split('T')[0];
  const todayTasks = tasks.filter(t => !t.completed && t.dueDate === todayStr);
  const upcomingTasks = tasks.filter(t => !t.completed && t.dueDate > todayStr);
  const completedTasks = tasks.filter(t => t.completed);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            AI Planner & To-Do
          </h1>
          <p className="text-muted-foreground mt-2">Smart task management powered by AI</p>
        </div>
        <Button
          onClick={handleGenerateAITasks}
          className="bg-primary hover:bg-primary/90 w-fit"
        >
          <Sparkles className="mr-2 h-4 w-4" />
          Generate AI Tasks
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-gradient-card shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Tasks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{tasks.length}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {tasks.filter(t => !t.completed).length} pending
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Completed Today
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {tasks.filter(t => t.completed && t.dueDate === new Date().toISOString().split('T')[0]).length}
            </div>
            <p className="text-xs text-success flex items-center gap-1 mt-1">
              <CheckCircle2 className="h-3 w-3" />
              Great progress!
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {projects.filter(p => p.status === "In Progress").length}
            </div>
            <p className="text-xs text-muted-foreground mt-1">2 in progress</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              AI Suggestions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{aiSuggestions.length}</div>
            <p className="text-xs text-accent mt-1">Personalized tips</p>
          </CardContent>
        </Card>
      </div>

      {/* AI Today's Summary */}
      <Card className="border-accent/20 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-accent" />
            Today's AI Summary
          </CardTitle>
          <CardDescription>Your personalized focus areas for today</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg bg-background/80 backdrop-blur border border-accent/20">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Target className="h-4 w-4 text-accent" />
              Priority Focus
            </h4>
            <p className="text-sm text-muted-foreground">
              You have <strong>2 high-priority assignments</strong> due today. Start with the ML Assignment as it aligns with your upcoming exam on neural networks.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-background/80 backdrop-blur border border-primary/20">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              Study Recommendation
            </h4>
            <p className="text-sm text-muted-foreground">
              Based on your recent performance, spend 90 minutes on Database Indexing concepts. Your last quiz showed gaps in B-tree understanding.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-background/80 backdrop-blur border border-success/20">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-success" />
              Quick Win
            </h4>
            <p className="text-sm text-muted-foreground">
              You're 85% through your E-commerce MVP. Completing the authentication module today will unlock project milestone badge!
            </p>
          </div>
        </CardContent>
      </Card>

      {/* AI Suggestions */}
      <Card className="border-accent/20 bg-accent/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-accent" />
            AI-Powered Suggestions
          </CardTitle>
          <CardDescription>Personalized recommendations based on your learning data</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {aiSuggestions.map((suggestion, idx) => (
            <div
              key={idx}
              className="p-3 rounded-lg bg-background border border-accent/20 flex items-start gap-3"
            >
              <Sparkles className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-sm">{suggestion}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Add Task */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5 text-primary" />
            Quick Add Task
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input
              placeholder="What do you need to do?"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
              className="flex-1"
            />
            <Button onClick={() => handleAddTask()} className="bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              Add Task
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="today" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
        </TabsList>

        <TabsContent value="today" className="mt-6 space-y-3">
          {todayTasks.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <CheckCircle2 className="h-12 w-12 text-success mx-auto mb-4" />
                <p className="text-lg font-medium">All done for today! 🎉</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Great job staying on top of your tasks
                </p>
              </CardContent>
            </Card>
          ) : (
            todayTasks.map((task) => (
              <Card key={task.id} className="hover:shadow-card transition-all">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <Checkbox
                      checked={task.completed}
                      onCheckedChange={() => handleToggleTask(task.id)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className={`font-semibold ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                            {task.title}
                          </h4>
                          {task.description && (
                            <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
                          )}
                          <div className="flex items-center gap-2 mt-2">
                            <Badge className={getPriorityColor(task.priority)} variant="outline">
                              {task.priority}
                            </Badge>
                            <Badge variant="secondary">{task.category}</Badge>
                            {task.aiGenerated && (
                              <Badge className="bg-accent/10 text-accent border-accent/20">
                                <Sparkles className="h-3 w-3 mr-1" />
                                AI
                              </Badge>
                            )}
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {task.dueDate}
                            </span>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleDeleteTask(task.id)}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>

        <TabsContent value="upcoming" className="mt-6 space-y-3">
          {upcomingTasks.map((task) => (
            <Card key={task.id} className="hover:shadow-card transition-all">
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <Checkbox
                    checked={task.completed}
                    onCheckedChange={() => handleToggleTask(task.id)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-semibold">{task.title}</h4>
                        {task.description && (
                          <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
                        )}
                        <div className="flex items-center gap-2 mt-2">
                          <Badge className={getPriorityColor(task.priority)} variant="outline">
                            {task.priority}
                          </Badge>
                          <Badge variant="secondary">{task.category}</Badge>
                          {task.aiGenerated && (
                            <Badge className="bg-accent/10 text-accent border-accent/20">
                              <Sparkles className="h-3 w-3 mr-1" />
                              AI
                            </Badge>
                          )}
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {task.dueDate}
                          </span>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDeleteTask(task.id)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="projects" className="mt-6 space-y-4">
          {projects.map((project) => (
            <Card key={project.id} className="hover:shadow-glow transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <FolderKanban className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{project.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                        <div className="flex items-center gap-3 mt-3">
                          <Badge className={getStatusColor(project.status)}>
                            {project.status}
                          </Badge>
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            Due: {project.deadline}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {project.completedTasks}/{project.tasks} tasks
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {project.tags.map((tag, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="mt-4 space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="font-medium">{project.progress}%</span>
                          </div>
                          <Progress value={project.progress} className="h-2" />
                        </div>
                        <div className="mt-4 flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation();
                              toast.success(`Opening project: ${project.name}`);
                            }}
                          >
                            <FolderKanban className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                          <Button
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleAddTask(`Work on ${project.name}`);
                            }}
                          >
                            <Plus className="h-4 w-4 mr-2" />
                            Add Task
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>

      {/* Productivity Insights */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Productivity Insights
          </CardTitle>
          <CardDescription>Your task completion patterns and efficiency</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 rounded-lg bg-background border border-border">
              <h4 className="font-semibold mb-2">Completion Rate</h4>
              <p className="text-2xl font-bold text-primary">85%</p>
              <p className="text-sm text-muted-foreground mt-1">Last 30 days</p>
            </div>
            <div className="p-4 rounded-lg bg-background border border-border">
              <h4 className="font-semibold mb-2">Most Productive Time</h4>
              <p className="text-2xl font-bold text-success">9-11 AM</p>
              <p className="text-sm text-muted-foreground mt-1">Peak focus hours</p>
            </div>
            <div className="p-4 rounded-lg bg-background border border-border">
              <h4 className="font-semibold mb-2">Avg. Tasks/Day</h4>
              <p className="text-2xl font-bold text-accent">4.2</p>
              <p className="text-sm text-muted-foreground mt-1">Consistent pace</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIPlanner;
