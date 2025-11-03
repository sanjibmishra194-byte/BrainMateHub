import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Home from "@/pages/Home";
import GPACalculator from "@/pages/tools/GPACalculator";
import WordCounter from "@/pages/tools/WordCounter";
import AttendanceCalculator from "@/pages/tools/AttendanceCalculator";
import BMICalculator from "@/pages/tools/BMICalculator";
import CurrencyConverter from "@/pages/tools/CurrencyConverter";
import CalorieCalculator from "@/pages/tools/CalorieCalculator";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/tools/gpa-calculator" component={GPACalculator} />
      <Route path="/tools/word-counter" component={WordCounter} />
      <Route path="/tools/attendance-calculator" component={AttendanceCalculator} />
      <Route path="/tools/bmi-calculator" component={BMICalculator} />
      <Route path="/tools/currency-converter" component={CurrencyConverter} />
      <Route path="/tools/calorie-calculator" component={CalorieCalculator} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={Privacy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
