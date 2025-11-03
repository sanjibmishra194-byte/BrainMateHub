import { BlogCard } from '../BlogCard';

export default function BlogCardExample() {
  return (
    <div className="p-6 max-w-sm">
      <BlogCard
        title="10 Study Tips for Better Grades"
        excerpt="Discover proven strategies to improve your academic performance and boost your GPA this semester."
        author="Sarah Johnson"
        date="Nov 1, 2025"
        category="Study Tips"
      />
    </div>
  );
}
