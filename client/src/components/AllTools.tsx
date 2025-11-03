import {
  DollarSign,
  PiggyBank,
  Calculator,
  TrendingUp,
  CreditCard,
  Activity,
  Heart,
  Flame,
  Dumbbell,
  GraduationCap,
  Type,
  Calendar,
  BookOpen,
  Binary,
  Sigma,
  Percent,
  Square,
  Thermometer,
  Clock,
  Ruler,
  Globe,
  Brain,
  Timer,
  FileText,
  Lightbulb,
} from "lucide-react";
import { ToolCard } from "./ToolCard";

export function AllTools() {
  const toolCategories = [
    {
      title: "Finance",
      icon: DollarSign,
      tools: [
        { icon: Calculator, title: "EMI Calculator", description: "Calculate monthly loan payments" },
        { icon: PiggyBank, title: "Savings Calculator", description: "Plan your savings goals" },
        { icon: TrendingUp, title: "Investment Calculator", description: "Track investment returns" },
        { icon: CreditCard, title: "Tax Calculator", description: "Estimate your tax liability" },
        { icon: DollarSign, title: "Currency Converter", description: "Real-time exchange rates" },
      ],
    },
    {
      title: "Health & Fitness",
      icon: Activity,
      tools: [
        { icon: Activity, title: "BMI Calculator", description: "Calculate Body Mass Index" },
        { icon: Flame, title: "Calorie Calculator", description: "Track daily calorie intake" },
        { icon: Heart, title: "Heart Rate Calculator", description: "Monitor your heart rate zones" },
        { icon: Dumbbell, title: "Protein Calculator", description: "Calculate daily protein needs" },
      ],
    },
    {
      title: "Study Tools",
      icon: GraduationCap,
      tools: [
        { icon: GraduationCap, title: "GPA Calculator", description: "Calculate your GPA" },
        { icon: Type, title: "Word Counter", description: "Count words and characters" },
        { icon: Calendar, title: "Attendance Calculator", description: "Track class attendance" },
        { icon: BookOpen, title: "Study Planner", description: "Plan your study schedule" },
      ],
    },
    {
      title: "Math & Science",
      icon: Binary,
      tools: [
        { icon: Binary, title: "Equation Solver", description: "Solve mathematical equations" },
        { icon: Percent, title: "Percentage Calculator", description: "Calculate percentages" },
        { icon: Sigma, title: "Statistics Calculator", description: "Statistical analysis tools" },
        { icon: Square, title: "Geometry Calculator", description: "Area, volume, and more" },
      ],
    },
    {
      title: "Daily Life / Conversions",
      icon: Ruler,
      tools: [
        { icon: Ruler, title: "Unit Converter", description: "Convert between units" },
        { icon: Clock, title: "Timezone Converter", description: "Convert time zones" },
        { icon: Thermometer, title: "Temperature Converter", description: "Convert temperature units" },
        { icon: Globe, title: "Distance Calculator", description: "Calculate distances" },
      ],
    },
    {
      title: "AI / Productivity",
      icon: Brain,
      tools: [
        { icon: Brain, title: "AI Study Assistant", description: "AI-powered study help" },
        { icon: Timer, title: "Pomodoro Timer", description: "Boost productivity" },
        { icon: FileText, title: "AI Note-taking", description: "Smart note organization" },
        { icon: Lightbulb, title: "Idea Generator", description: "Generate creative ideas" },
      ],
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">All Tools</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our complete collection of 50+ calculators and tools organized by category
          </p>
        </div>

        <div className="space-y-16">
          {toolCategories.map((category) => (
            <div key={category.title}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                {category.tools.map((tool) => (
                  <ToolCard key={tool.title} {...tool} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
