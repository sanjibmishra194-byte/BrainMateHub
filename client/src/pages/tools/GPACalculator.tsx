import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Trash2 } from "lucide-react";

interface Course {
  id: string;
  name: string;
  grade: string;
  credits: string;
}

export default function GPACalculator() {
  const [courses, setCourses] = useState<Course[]>([
    { id: "1", name: "", grade: "", credits: "" },
  ]);
  const [gpa, setGpa] = useState<number | null>(null);

  const gradePoints: Record<string, number> = {
    "A+": 4.0, "A": 4.0, "A-": 3.7,
    "B+": 3.3, "B": 3.0, "B-": 2.7,
    "C+": 2.3, "C": 2.0, "C-": 1.7,
    "D+": 1.3, "D": 1.0, "F": 0.0,
  };

  const addCourse = () => {
    setCourses([...courses, { id: Date.now().toString(), name: "", grade: "", credits: "" }]);
  };

  const removeCourse = (id: string) => {
    if (courses.length > 1) {
      setCourses(courses.filter(c => c.id !== id));
    }
  };

  const updateCourse = (id: string, field: keyof Course, value: string) => {
    setCourses(courses.map(c => c.id === id ? { ...c, [field]: value } : c));
  };

  const calculateGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    for (const course of courses) {
      const credits = parseFloat(course.credits);
      const points = gradePoints[course.grade.toUpperCase()];
      
      if (!isNaN(credits) && points !== undefined) {
        totalPoints += points * credits;
        totalCredits += credits;
      }
    }

    if (totalCredits > 0) {
      setGpa(totalPoints / totalCredits);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="max-w-2xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">GPA Calculator</h1>
            <p className="text-muted-foreground">
              Calculate your semester GPA by entering course grades and credit hours
            </p>
          </div>

          <Card className="p-6 md:p-8 mb-6">
            <div className="space-y-4">
              {courses.map((course, index) => (
                <div key={course.id} className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="md:col-span-5">
                    <Label htmlFor={`name-${course.id}`}>Course Name</Label>
                    <Input
                      id={`name-${course.id}`}
                      placeholder="e.g., Mathematics"
                      value={course.name}
                      onChange={(e) => updateCourse(course.id, "name", e.target.value)}
                      data-testid={`input-course-name-${index}`}
                    />
                  </div>
                  <div className="md:col-span-3">
                    <Label htmlFor={`grade-${course.id}`}>Grade</Label>
                    <Input
                      id={`grade-${course.id}`}
                      placeholder="A, B+, etc."
                      value={course.grade}
                      onChange={(e) => updateCourse(course.id, "grade", e.target.value)}
                      data-testid={`input-grade-${index}`}
                    />
                  </div>
                  <div className="md:col-span-3">
                    <Label htmlFor={`credits-${course.id}`}>Credits</Label>
                    <Input
                      id={`credits-${course.id}`}
                      type="number"
                      placeholder="3"
                      value={course.credits}
                      onChange={(e) => updateCourse(course.id, "credits", e.target.value)}
                      data-testid={`input-credits-${index}`}
                    />
                  </div>
                  <div className="md:col-span-1 flex items-end">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeCourse(course.id)}
                      disabled={courses.length === 1}
                      data-testid={`button-remove-${index}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <Button
              variant="outline"
              className="w-full mt-4"
              onClick={addCourse}
              data-testid="button-add-course"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Course
            </Button>

            <Button
              className="w-full mt-6"
              size="lg"
              onClick={calculateGPA}
              data-testid="button-calculate-gpa"
            >
              Calculate GPA
            </Button>
          </Card>

          {gpa !== null && (
            <Card className="p-6 md:p-8 bg-primary/5 border-primary/20">
              <div className="text-center">
                <p className="text-sm font-medium text-muted-foreground mb-2">Your GPA</p>
                <p className="text-4xl md:text-5xl font-bold font-mono text-primary" data-testid="text-gpa-result">
                  {gpa.toFixed(2)}
                </p>
              </div>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
