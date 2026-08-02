// SectionDivider – thin line with decorative "+" icons at both ends (Bronze)
import { Plus } from 'lucide-react';

export default function SectionDivider() {
  return (
    <div className="border-t relative" style={{ borderColor: 'rgba(143, 90, 57, 0.2)' }}>
      <Plus
        className="absolute -top-3 -left-3 h-6 w-6"
        style={{ color: 'rgba(143, 90, 57, 0.45)' }}
        aria-hidden="true"
      />
      <Plus
        className="absolute -top-3 -right-3 h-6 w-6"
        style={{ color: 'rgba(143, 90, 57, 0.45)' }}
        aria-hidden="true"
      />
    </div>
  );
}
