import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { GraduationCap, Target, Users, Zap } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower students and professionals with free, easy-to-use tools that simplify complex calculations and boost productivity.",
    },
    {
      icon: Users,
      title: "For Everyone",
      description: "From students tracking their GPA to professionals managing finances, our tools are designed for everyone.",
    },
    {
      icon: Zap,
      title: "Fast & Reliable",
      description: "All tools are optimized for speed and accuracy, giving you instant results you can trust.",
    },
    {
      icon: GraduationCap,
      title: "Education First",
      description: "We believe in making education and productivity accessible to everyone, completely free of charge.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About BrainMate</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Smarter Tools for Smarter Minds
              </p>
            </div>

            <Card className="p-8 md:p-12 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  BrainMate was created with a simple vision: to provide students and professionals with 
                  powerful, easy-to-use calculators and tools that make daily tasks easier.
                </p>
                <p>
                  We understand the challenges of managing academic work, finances, health, and productivity. 
                  That's why we've built a comprehensive platform with over 50 free tools to help you succeed 
                  in every aspect of your life.
                </p>
                <p>
                  From calculating your GPA to tracking your fitness goals, from managing your budget to 
                  converting currencies, BrainMate is your all-in-one productivity companion.
                </p>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {values.map((value) => (
                <Card key={value.title} className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>

            <Card className="p-8 md:p-12 bg-primary/5 border-primary/20">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Thousands of Users</h2>
                <p className="text-muted-foreground mb-6">
                  Start using our free tools today and experience the difference
                </p>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
