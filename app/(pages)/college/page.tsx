import { Building2 } from 'lucide-react';
import StubPage from '../../components/StubPage/StubPage';

export const metadata = { title: 'Колледж — ГБПОО ЛАСК' };

export default function CollegePage() {
  return (
    <StubPage
      icon={Building2}
      title="Колледж"
      description="История колледжа, руководство, структурные подразделения, материально-техническая база и достижения ГБПОО ЛАСК им. А.С. Шеремета."
    />
  );
}
