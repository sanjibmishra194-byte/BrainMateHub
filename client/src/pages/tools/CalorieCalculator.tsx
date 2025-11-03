import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Plus, Trash2 } from "lucide-react";

interface FoodItem {
  id: string;
  name: string;
  serving: string;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
}

// Sample food database
const FOOD_DATABASE: Omit<FoodItem, "id">[] = [
  { name: "Apple", serving: "1 medium", calories: 95, protein: 0.5, fat: 0.3, carbs: 25 },
  { name: "Banana", serving: "1 medium", calories: 105, protein: 1.3, fat: 0.4, carbs: 27 },
  { name: "Chicken Breast", serving: "100g", calories: 165, protein: 31, fat: 3.6, carbs: 0 },
  { name: "Rice (cooked)", serving: "1 cup", calories: 206, protein: 4.3, fat: 0.4, carbs: 45 },
  { name: "Egg", serving: "1 large", calories: 78, protein: 6.3, fat: 5.3, carbs: 0.6 },
  { name: "Milk (whole)", serving: "1 cup", calories: 149, protein: 7.7, fat: 7.9, carbs: 11.7 },
  { name: "Bread (white)", serving: "1 slice", calories: 79, protein: 2.7, fat: 1, carbs: 14.6 },
  { name: "Pasta (cooked)", serving: "1 cup", calories: 220, protein: 8, fat: 1.3, carbs: 43 },
  { name: "Salmon", serving: "100g", calories: 206, protein: 22, fat: 13, carbs: 0 },
  { name: "Broccoli", serving: "1 cup", calories: 55, protein: 3.7, fat: 0.6, carbs: 11 },
  { name: "Orange Juice", serving: "1 cup", calories: 112, protein: 1.7, fat: 0.5, carbs: 26 },
  { name: "Coffee (black)", serving: "1 cup", calories: 2, protein: 0.3, fat: 0, carbs: 0 },
  { name: "Pizza (cheese)", serving: "1 slice", calories: 285, protein: 12, fat: 10, carbs: 36 },
  { name: "Yogurt (plain)", serving: "1 cup", calories: 154, protein: 13, fat: 8, carbs: 11 },
];

export default function CalorieCalculator() {
  const [selectedFoods, setSelectedFoods] = useState<FoodItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFood, setSelectedFood] = useState("");
  const [quantity, setQuantity] = useState("1");

  const filteredFoods = FOOD_DATABASE.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addFood = () => {
    const food = FOOD_DATABASE.find((f) => f.name === selectedFood);
    if (food) {
      const qty = parseFloat(quantity) || 1;
      setSelectedFoods([
        ...selectedFoods,
        {
          ...food,
          id: Date.now().toString(),
          calories: food.calories * qty,
          protein: food.protein * qty,
          fat: food.fat * qty,
          carbs: food.carbs * qty,
        },
      ]);
      setSelectedFood("");
      setQuantity("1");
      setSearchTerm("");
    }
  };

  const removeFood = (id: string) => {
    setSelectedFoods(selectedFoods.filter((f) => f.id !== id));
  };

  const totals = selectedFoods.reduce(
    (acc, food) => ({
      calories: acc.calories + food.calories,
      protein: acc.protein + food.protein,
      fat: acc.fat + food.fat,
      carbs: acc.carbs + food.carbs,
    }),
    { calories: 0, protein: 0, fat: 0, carbs: 0 }
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Calorie Calculator</h1>
            <p className="text-muted-foreground">
              Track calories, protein, fat, and carbs for your meals and drinks
            </p>
          </div>

          <Card className="p-6 md:p-8 mb-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="search-food">Search Food</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="search-food"
                    placeholder="Search for food items..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                    data-testid="input-search"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <Label htmlFor="select-food">Select Food</Label>
                  <Select value={selectedFood} onValueChange={setSelectedFood}>
                    <SelectTrigger id="select-food" data-testid="select-food">
                      <SelectValue placeholder="Choose a food item" />
                    </SelectTrigger>
                    <SelectContent>
                      {(searchTerm ? filteredFoods : FOOD_DATABASE).map((food) => (
                        <SelectItem key={food.name} value={food.name}>
                          {food.name} ({food.serving}) - {food.calories} cal
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="quantity">Servings</Label>
                  <Input
                    id="quantity"
                    type="number"
                    placeholder="1"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    min="0.1"
                    step="0.1"
                    data-testid="input-quantity"
                  />
                </div>
              </div>

              <Button
                className="w-full"
                onClick={addFood}
                disabled={!selectedFood}
                data-testid="button-add-food"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Food
              </Button>
            </div>
          </Card>

          {selectedFoods.length > 0 && (
            <>
              <Card className="p-6 md:p-8 mb-6">
                <h3 className="text-lg font-semibold mb-4">Your Meal</h3>
                <div className="space-y-3">
                  {selectedFoods.map((food, index) => (
                    <div
                      key={food.id}
                      className="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
                    >
                      <div className="flex-1">
                        <p className="font-medium">{food.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {food.calories.toFixed(0)} cal | P: {food.protein.toFixed(1)}g | F:{" "}
                          {food.fat.toFixed(1)}g | C: {food.carbs.toFixed(1)}g
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFood(food.id)}
                        data-testid={`button-remove-${index}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 md:p-8 bg-primary/5 border-primary/20">
                <h3 className="text-lg font-semibold mb-4 text-center">Total Nutrition</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold font-mono text-primary" data-testid="text-total-calories">
                      {totals.calories.toFixed(0)}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">Calories</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold font-mono text-primary" data-testid="text-total-protein">
                      {totals.protein.toFixed(1)}g
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">Protein</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold font-mono text-primary" data-testid="text-total-fat">
                      {totals.fat.toFixed(1)}g
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">Fat</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold font-mono text-primary" data-testid="text-total-carbs">
                      {totals.carbs.toFixed(1)}g
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">Carbs</p>
                  </div>
                </div>
              </Card>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
