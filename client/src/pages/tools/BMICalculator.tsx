import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function BMICalculator() {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [result, setResult] = useState<{
    bmi: number;
    category: string;
    status: "underweight" | "normal" | "overweight" | "obese";
    healthyWeightRange: { min: number; max: number };
  } | null>(null);

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { category: "Underweight", status: "underweight" as const };
    if (bmi < 25) return { category: "Normal weight", status: "normal" as const };
    if (bmi < 30) return { category: "Overweight", status: "overweight" as const };
    return { category: "Obese", status: "obese" as const };
  };

  const calculateBMI = () => {
    let weightKg: number;
    let heightM: number;

    if (unit === "metric") {
      weightKg = parseFloat(weight);
      heightM = parseFloat(height) / 100;
    } else {
      weightKg = parseFloat(weight) * 0.453592;
      const totalInches = parseInt(feet) * 12 + parseInt(inches);
      heightM = totalInches * 0.0254;
    }

    if (isNaN(weightKg) || isNaN(heightM) || weightKg <= 0 || heightM <= 0) {
      return;
    }

    const bmi = weightKg / (heightM * heightM);
    const { category, status } = getBMICategory(bmi);

    // Calculate healthy weight range
    const minHealthyWeight = 18.5 * heightM * heightM;
    const maxHealthyWeight = 24.9 * heightM * heightM;

    setResult({
      bmi,
      category,
      status,
      healthyWeightRange: {
        min: unit === "metric" ? minHealthyWeight : minHealthyWeight / 0.453592,
        max: unit === "metric" ? maxHealthyWeight : maxHealthyWeight / 0.453592,
      },
    });
  };

  const reset = () => {
    setWeight("");
    setHeight("");
    setFeet("");
    setInches("");
    setResult(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="max-w-2xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">BMI Calculator</h1>
            <p className="text-muted-foreground">
              Calculate your Body Mass Index and get personalized health insights
            </p>
          </div>

          <Card className="p-6 md:p-8 mb-6">
            <Tabs value={unit} onValueChange={(v) => setUnit(v as "metric" | "imperial")}>
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="metric" data-testid="tab-metric">
                  Metric
                </TabsTrigger>
                <TabsTrigger value="imperial" data-testid="tab-imperial">
                  Imperial
                </TabsTrigger>
              </TabsList>

              <TabsContent value="metric" className="space-y-6">
                <div>
                  <Label htmlFor="weight-kg">Weight (kg)</Label>
                  <Input
                    id="weight-kg"
                    type="number"
                    placeholder="e.g., 70"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    data-testid="input-weight-kg"
                  />
                </div>
                <div>
                  <Label htmlFor="height-cm">Height (cm)</Label>
                  <Input
                    id="height-cm"
                    type="number"
                    placeholder="e.g., 175"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    data-testid="input-height-cm"
                  />
                </div>
              </TabsContent>

              <TabsContent value="imperial" className="space-y-6">
                <div>
                  <Label htmlFor="weight-lbs">Weight (lbs)</Label>
                  <Input
                    id="weight-lbs"
                    type="number"
                    placeholder="e.g., 154"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    data-testid="input-weight-lbs"
                  />
                </div>
                <div>
                  <Label>Height</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="number"
                        placeholder="Feet"
                        value={feet}
                        onChange={(e) => setFeet(e.target.value)}
                        data-testid="input-height-feet"
                      />
                    </div>
                    <div>
                      <Input
                        type="number"
                        placeholder="Inches"
                        value={inches}
                        onChange={(e) => setInches(e.target.value)}
                        data-testid="input-height-inches"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex gap-4 mt-6">
              <Button
                className="flex-1"
                size="lg"
                onClick={calculateBMI}
                data-testid="button-calculate"
              >
                Calculate BMI
              </Button>
              <Button variant="outline" size="lg" onClick={reset} data-testid="button-reset">
                Reset
              </Button>
            </div>
          </Card>

          {result && (
            <div className="space-y-4">
              <Card
                className={`p-6 md:p-8 ${
                  result.status === "normal"
                    ? "bg-green-500/10 border-green-500/20"
                    : result.status === "underweight"
                    ? "bg-blue-500/10 border-blue-500/20"
                    : result.status === "overweight"
                    ? "bg-yellow-500/10 border-yellow-500/20"
                    : "bg-red-500/10 border-red-500/20"
                }`}
              >
                <div className="text-center mb-6">
                  <p className="text-sm font-medium text-muted-foreground mb-2">Your BMI</p>
                  <p className="text-5xl font-bold font-mono mb-2" data-testid="text-bmi-result">
                    {result.bmi.toFixed(1)}
                  </p>
                  <p className="text-lg font-semibold" data-testid="text-bmi-category">
                    {result.category}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="h-2 bg-background rounded-full overflow-hidden">
                      <div
                        className={`h-full ${
                          result.status === "normal"
                            ? "bg-green-500"
                            : result.status === "underweight"
                            ? "bg-blue-500"
                            : result.status === "overweight"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                        style={{ width: `${Math.min((result.bmi / 40) * 100, 100)}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      <span>Underweight</span>
                      <span>Normal</span>
                      <span>Overweight</span>
                      <span>Obese</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground mb-2">
                      Healthy weight range for your height:
                    </p>
                    <p className="text-lg font-semibold" data-testid="text-healthy-range">
                      {result.healthyWeightRange.min.toFixed(1)} -{" "}
                      {result.healthyWeightRange.max.toFixed(1)}{" "}
                      {unit === "metric" ? "kg" : "lbs"}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 md:p-8">
                <h3 className="text-lg font-semibold mb-4">What does this mean?</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  {result.status === "underweight" && (
                    <p>
                      Your BMI is below the healthy range. Consider consulting with a healthcare
                      provider about healthy ways to gain weight.
                    </p>
                  )}
                  {result.status === "normal" && (
                    <p>
                      Your BMI is within the healthy range. Maintain your current lifestyle with
                      regular exercise and balanced nutrition.
                    </p>
                  )}
                  {result.status === "overweight" && (
                    <p>
                      Your BMI is above the healthy range. Consider adopting a healthier diet and
                      increasing physical activity. Consult a healthcare provider for guidance.
                    </p>
                  )}
                  {result.status === "obese" && (
                    <p>
                      Your BMI indicates obesity. It's important to consult with a healthcare
                      provider to develop a safe and effective weight management plan.
                    </p>
                  )}
                  <p className="text-xs pt-2 border-t">
                    Note: BMI is a screening tool and doesn't directly measure body fat or health.
                    Consult a healthcare professional for a comprehensive health assessment.
                  </p>
                </div>
              </Card>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
