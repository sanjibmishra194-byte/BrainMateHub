import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Students_studying_together_hero_image_72a3b50c.png";

export function Hero() {
  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
          Smarter Tools for <br />
          <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
            Smarter Minds
          </span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto mb-8">
          50+ free calculators and tools designed for students and everyone. From GPA tracking to currency conversion, we've got you covered.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#tools">
            <Button
              size="lg"
              className="px-8 py-6 text-lg backdrop-blur-sm bg-primary/90 hover:bg-primary border border-primary-border"
              data-testid="button-explore-tools"
            >
              Explore Tools
            </Button>
          </a>
          <a href="/about">
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg backdrop-blur-sm bg-white/10 hover:bg-white/20 text-white border-white/30"
              data-testid="button-learn-more"
            >
              Learn More
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
