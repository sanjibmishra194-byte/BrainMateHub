import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
      <div className="max-w-2xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <Mail className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
        <p className="text-base md:text-lg text-muted-foreground mb-8">
          Get the latest tools, study tips, and exclusive resources delivered to your inbox
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 h-12"
            data-testid="input-newsletter-email"
          />
          <Button type="submit" size="lg" className="h-12" data-testid="button-subscribe">
            Subscribe
          </Button>
        </form>
        <p className="text-xs text-muted-foreground mt-4">
          No spam. Unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  );
}
