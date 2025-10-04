import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Linkedin } from "lucide-react";
import { toast } from "sonner";

export function LinkedInExportDialog() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({
    skills: true,
    badges: true,
    projects: true,
    scores: false,
    courses: true,
  });

  const handleExport = () => {
    const items = Object.entries(selected).filter(([_, val]) => val).map(([key]) => key);
    toast.success(`Exported ${items.length} items to LinkedIn! 🎉`);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-primary hover:bg-primary/90">
          <Linkedin className="mr-2 h-4 w-4" />
          Export to LinkedIn
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Export to LinkedIn</DialogTitle>
          <DialogDescription>Choose what to include in your LinkedIn profile</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          {Object.entries({
            skills: "Core Skills & Mastery Levels",
            badges: "Badges & Achievements",
            projects: "Featured Projects",
            scores: "Exam Scores & Grades",
            courses: "Completed Courses",
          }).map(([key, label]) => (
            <div key={key} className="flex items-center space-x-2">
              <Checkbox
                id={key}
                checked={selected[key as keyof typeof selected]}
                onCheckedChange={(checked) =>
                  setSelected({ ...selected, [key]: checked as boolean })
                }
              />
              <Label htmlFor={key} className="text-sm cursor-pointer">
                {label}
              </Label>
            </div>
          ))}
        </div>
        <Button onClick={handleExport} className="w-full bg-primary hover:bg-primary/90">
          Export Selected Items
        </Button>
      </DialogContent>
    </Dialog>
  );
}
