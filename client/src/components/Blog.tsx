import { BlogCard } from "./BlogCard";
import { Button } from "@/components/ui/button";

export function Blog() {
  const blogPosts = [
    {
      title: "10 Study Tips for Better Grades",
      excerpt: "Discover proven strategies to improve your academic performance and boost your GPA this semester.",
      author: "Sarah Johnson",
      date: "Nov 1, 2025",
      category: "Study Tips",
    },
    {
      title: "Managing Your Student Budget: A Complete Guide",
      excerpt: "Learn how to track expenses, save money, and make smart financial decisions as a student.",
      author: "Michael Chen",
      date: "Oct 28, 2025",
      category: "Finance",
    },
    {
      title: "The Science of Effective Note-Taking",
      excerpt: "Research-backed methods to take better notes and retain more information from your classes.",
      author: "Dr. Emily Roberts",
      date: "Oct 25, 2025",
      category: "Productivity",
    },
    {
      title: "Healthy Eating on a Student Budget",
      excerpt: "Nutritious meal planning tips and recipes that won't break the bank.",
      author: "Alex Martinez",
      date: "Oct 22, 2025",
      category: "Health",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background" id="blog">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest from Our Blog</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Educational articles, productivity tips, and guides to help you succeed
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button size="lg" variant="outline" data-testid="button-view-all-articles">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}
