import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedTools } from "@/components/FeaturedTools";
import { AllTools } from "@/components/AllTools";
import { Blog } from "@/components/Blog";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedTools />
        <AllTools />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
