import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { Link } from "wouter";

interface ToolCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  featured?: boolean;
}

const getToolHref = (title: string): string => {
  const toolMap: Record<string, string> = {
    "GPA Calculator": "/tools/gpa-calculator",
    "Word Counter": "/tools/word-counter",
    "Attendance Calculator": "/tools/attendance-calculator",
    "BMI Calculator": "/tools/bmi-calculator",
    "Currency Exchange": "/tools/currency-converter",
    "Currency Converter": "/tools/currency-converter",
    "Calorie Calculator": "/tools/calorie-calculator",
  };
  return toolMap[title] || "#";
};

export function ToolCard({ icon: Icon, title, description, href, featured = false }: ToolCardProps) {
  const toolHref = href || getToolHref(title);
  
  return (
    <Link href={toolHref}>
      <Card
        className={`p-6 md:p-8 hover-elevate active-elevate-2 cursor-pointer transition-all ${
          featured ? "border-primary/20" : ""
        }`}
        data-testid={`card-tool-${title.toLowerCase().replace(/\s+/g, "-")}`}
      >
        <div className="flex flex-col h-full">
          <div className={`${featured ? "w-16 h-16" : "w-12 h-12"} rounded-xl bg-primary/10 flex items-center justify-center mb-4`}>
            <Icon className={`${featured ? "w-8 h-8" : "w-6 h-6"} text-primary`} />
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm md:text-base text-muted-foreground mb-4 flex-grow line-clamp-2">
            {description}
          </p>
          <Button
            className="w-full sm:w-auto"
            variant={featured ? "default" : "outline"}
            data-testid={`button-try-${title.toLowerCase().replace(/\s+/g, "-")}`}
          >
            Try Now
          </Button>
        </div>
      </Card>
    </Link>
  );
}
