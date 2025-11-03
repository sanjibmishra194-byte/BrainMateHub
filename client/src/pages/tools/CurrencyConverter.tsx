import { useState, useEffect } from "react";
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
import { ArrowRightLeft, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

const POPULAR_CURRENCIES = [
  { code: "USD", name: "US Dollar" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "British Pound" },
  { code: "INR", name: "Indian Rupee" },
  { code: "JPY", name: "Japanese Yen" },
  { code: "CNY", name: "Chinese Yuan" },
  { code: "AUD", name: "Australian Dollar" },
  { code: "CAD", name: "Canadian Dollar" },
];

export default function CurrencyConverter() {
  const [amount, setAmount] = useState("1");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [result, setResult] = useState<number | null>(null);

  const { data: currencies, isLoading: currenciesLoading } = useQuery({
    queryKey: ["/api/currencies"],
    queryFn: async () => {
      const response = await fetch("https://api.frankfurter.app/currencies");
      if (!response.ok) throw new Error("Failed to fetch currencies");
      return response.json() as Promise<Record<string, string>>;
    },
  });

  const { data: rates, isLoading: ratesLoading } = useQuery({
    queryKey: ["/api/rates", fromCurrency],
    queryFn: async () => {
      const response = await fetch(`https://api.frankfurter.app/latest?from=${fromCurrency}`);
      if (!response.ok) throw new Error("Failed to fetch rates");
      return response.json() as Promise<{ rates: Record<string, number> }>;
    },
    enabled: !!fromCurrency,
  });

  useEffect(() => {
    if (rates && amount && toCurrency) {
      const amountNum = parseFloat(amount);
      if (!isNaN(amountNum) && rates.rates[toCurrency]) {
        setResult(amountNum * rates.rates[toCurrency]);
      }
    }
  }, [amount, rates, toCurrency]);

  const swapCurrencies = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  const currencyList = currencies
    ? Object.entries(currencies).map(([code, name]) => ({ code, name }))
    : POPULAR_CURRENCIES;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="max-w-2xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Currency Converter</h1>
            <p className="text-muted-foreground">
              Convert between 30+ currencies with real-time exchange rates
            </p>
          </div>

          <Card className="p-6 md:p-8 mb-6">
            <div className="space-y-6">
              <div>
                <Label htmlFor="amount">Amount</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  data-testid="input-amount"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
                <div className="md:col-span-2">
                  <Label htmlFor="from-currency">From</Label>
                  <Select value={fromCurrency} onValueChange={setFromCurrency}>
                    <SelectTrigger id="from-currency" data-testid="select-from-currency">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {currencyList.map((currency) => (
                        <SelectItem key={currency.code} value={currency.code}>
                          {currency.code} - {currency.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex justify-center">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={swapCurrencies}
                    data-testid="button-swap"
                  >
                    <ArrowRightLeft className="w-4 h-4" />
                  </Button>
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="to-currency">To</Label>
                  <Select value={toCurrency} onValueChange={setToCurrency}>
                    <SelectTrigger id="to-currency" data-testid="select-to-currency">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {currencyList.map((currency) => (
                        <SelectItem key={currency.code} value={currency.code}>
                          {currency.code} - {currency.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </Card>

          {ratesLoading || currenciesLoading ? (
            <Card className="p-8 flex items-center justify-center">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </Card>
          ) : result !== null ? (
            <Card className="p-6 md:p-8 bg-primary/5 border-primary/20">
              <div className="text-center">
                <p className="text-sm font-medium text-muted-foreground mb-2">Converted Amount</p>
                <p className="text-4xl md:text-5xl font-bold font-mono text-primary mb-4" data-testid="text-result">
                  {result.toFixed(2)} {toCurrency}
                </p>
                <p className="text-sm text-muted-foreground">
                  {amount} {fromCurrency} = {result.toFixed(2)} {toCurrency}
                </p>
                {rates && rates.rates[toCurrency] && (
                  <p className="text-xs text-muted-foreground mt-2" data-testid="text-exchange-rate">
                    Exchange rate: 1 {fromCurrency} = {rates.rates[toCurrency].toFixed(4)}{" "}
                    {toCurrency}
                  </p>
                )}
              </div>
            </Card>
          ) : null}

          <Card className="p-6 md:p-8 mt-6">
            <h3 className="text-lg font-semibold mb-3">Popular Currencies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {POPULAR_CURRENCIES.map((currency) => (
                <Button
                  key={currency.code}
                  variant="outline"
                  size="sm"
                  onClick={() => setFromCurrency(currency.code)}
                  data-testid={`button-quick-${currency.code.toLowerCase()}`}
                >
                  {currency.code}
                </Button>
              ))}
            </div>
          </Card>

          <p className="text-xs text-muted-foreground text-center mt-6">
            Exchange rates are updated daily and sourced from the European Central Bank via
            Frankfurter API
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
