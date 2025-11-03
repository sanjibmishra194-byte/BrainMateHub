import { ToolCard } from '../ToolCard';
import { Calculator } from 'lucide-react';

export default function ToolCardExample() {
  return (
    <div className="p-6 max-w-sm">
      <ToolCard
        icon={Calculator}
        title="GPA Calculator"
        description="Calculate your semester GPA with ease"
        featured={true}
      />
    </div>
  );
}
