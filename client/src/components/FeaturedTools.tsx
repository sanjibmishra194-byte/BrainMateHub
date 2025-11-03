import { GraduationCap, Type, Calendar, Activity, DollarSign, Apple } from "lucide-react";
import { ToolCard } from "./ToolCard";

export function FeaturedTools() {
  const featuredTools = [
    {
      icon: GraduationCap,
      title: "GPA Calculator",
      description: "Calculate semester and cumulative GPA with credit hours",
    },
    {
      icon: Type,
      title: "Word Counter",
      description: "Count words, characters, sentences, and paragraphs instantly",
    },
    {
      icon: Calendar,
      title: "Attendance Calculator",
      description: "Track class attendance percentage and plan your leaves",
    },
    {
      icon: Activity,
      title: "BMI Calculator",
      description: "Calculate your Body Mass Index and get health insights",
    },
    {
      icon: DollarSign,
      title: "Currency Exchange",
      description: "Convert between 30+ currencies with real-time rates",
    },
    {
      icon: Apple,
      title: "Calorie Calculator",
      description: "Track calories, protein, fat, and carbs for food & drinks",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background" id="tools">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Tools</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Our most popular calculators and tools, designed to make your life easier
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredTools.map((tool) => (
            <ToolCard key={tool.title} {...tool} featured />
          ))}
        </div>
      </div>
    </section>
  );
}
