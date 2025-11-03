import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, CheckCircle } from "lucide-react";

export default function AttendanceCalculator() {
  const [totalClasses, setTotalClasses] = useState("");
  const [attendedClasses, setAttendedClasses] = useState("");
  const [targetPercentage, setTargetPercentage] = useState("75");
  const [result, setResult] = useState<{
    currentPercentage: number;
    status: "good" | "warning" | "danger";
    classesNeeded: number;
    canMiss: number;
  } | null>(null);

  const calculateAttendance = () => {
    const total = parseInt(totalClasses);
    const attended = parseInt(attendedClasses);
    const target = parseFloat(targetPercentage);

    if (isNaN(total) || isNaN(attended) || isNaN(target) || total <= 0 || attended < 0 || attended > total || target < 0 || target > 100) {
      return;
    }

    const currentPercentage = (attended / total) * 100;
    
    let status: "good" | "warning" | "danger" = "good";
    if (currentPercentage < target) {
      status = "danger";
    } else if (currentPercentage < target + 5) {
      status = "warning";
    }

    // Calculate classes needed to reach target
    let classesNeeded = 0;
    if (currentPercentage < target && target < 100) {
      const numerator = target * total - 100 * attended;
      const denominator = 100 - target;
      classesNeeded = Math.max(0, Math.ceil(numerator / denominator));
    }

    // Calculate how many classes can be missed
    let canMiss = 0;
    if (currentPercentage >= target && target > 0) {
      const numerator = 100 * attended - target * total;
      canMiss = Math.max(0, Math.floor(numerator / target));
    }

    setResult({
      currentPercentage,
      status,
      classesNeeded,
      canMiss,
    });
  };

  const reset = () => {
    setTotalClasses("");
    setAttendedClasses("");
    setTargetPercentage("75");
    setResult(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="max-w-2xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Attendance Calculator</h1>
            <p className="text-muted-foreground">
              Track your class attendance percentage and plan your leaves strategically
            </p>
          </div>

          <Card className="p-6 md:p-8 mb-6">
            <div className="space-y-6">
              <div>
                <Label htmlFor="total-classes">Total Classes Held</Label>
                <Input
                  id="total-classes"
                  type="number"
                  placeholder="e.g., 100"
                  value={totalClasses}
                  onChange={(e) => setTotalClasses(e.target.value)}
                  data-testid="input-total-classes"
                />
              </div>

              <div>
                <Label htmlFor="attended-classes">Classes Attended</Label>
                <Input
                  id="attended-classes"
                  type="number"
                  placeholder="e.g., 85"
                  value={attendedClasses}
                  onChange={(e) => setAttendedClasses(e.target.value)}
                  data-testid="input-attended-classes"
                />
              </div>

              <div>
                <Label htmlFor="target-percentage">Target Attendance (%)</Label>
                <Input
                  id="target-percentage"
                  type="number"
                  placeholder="e.g., 75"
                  value={targetPercentage}
                  onChange={(e) => setTargetPercentage(e.target.value)}
                  data-testid="input-target-percentage"
                />
              </div>

              <div className="flex gap-4">
                <Button
                  className="flex-1"
                  size="lg"
                  onClick={calculateAttendance}
                  data-testid="button-calculate"
                >
                  Calculate
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={reset}
                  data-testid="button-reset"
                >
                  Reset
                </Button>
              </div>
            </div>
          </Card>

          {result && (
            <div className="space-y-4">
              <Card
                className={`p-6 md:p-8 ${
                  result.status === "good"
                    ? "bg-green-500/10 border-green-500/20"
                    : result.status === "warning"
                    ? "bg-yellow-500/10 border-yellow-500/20"
                    : "bg-red-500/10 border-red-500/20"
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  {result.status === "good" ? (
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  ) : (
                    <AlertCircle
                      className={`w-8 h-8 ${
                        result.status === "warning" ? "text-yellow-500" : "text-red-500"
                      }`}
                    />
                  )}
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Current Attendance</p>
                    <p className="text-4xl font-bold font-mono" data-testid="text-current-percentage">
                      {result.currentPercentage.toFixed(2)}%
                    </p>
                  </div>
                </div>

                {result.status === "good" && result.canMiss > 0 && (
                  <p className="text-sm text-muted-foreground" data-testid="text-can-miss">
                    You can miss up to <strong className="text-foreground">{result.canMiss}</strong> more{" "}
                    {result.canMiss === 1 ? "class" : "classes"} and still maintain {targetPercentage}%
                    attendance.
                  </p>
                )}

                {result.status !== "good" && result.classesNeeded > 0 && (
                  <p className="text-sm text-muted-foreground" data-testid="text-classes-needed">
                    You need to attend <strong className="text-foreground">{result.classesNeeded}</strong>{" "}
                    more consecutive {result.classesNeeded === 1 ? "class" : "classes"} to reach{" "}
                    {targetPercentage}% attendance.
                  </p>
                )}
              </Card>

              <Card className="p-6 md:p-8">
                <h3 className="text-lg font-semibold mb-4">Attendance Summary</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold font-mono text-primary">
                      {attendedClasses}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">Classes Attended</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold font-mono text-primary">
                      {parseInt(totalClasses) - parseInt(attendedClasses)}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">Classes Missed</p>
                  </div>
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
