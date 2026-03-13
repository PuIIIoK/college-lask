import { Users } from 'lucide-react';
import StubPage from '../../components/StubPage/StubPage';

export const metadata = { title: 'Год единства народов России — ГБПОО ЛАСК' };

export default function UnityYearPage() {
  return (
    <StubPage
      icon={Users}
      title="Год единства народов России"
      description="Мероприятия, события и инициативы колледжа в рамках Года единства народов России 2026."
    />
  );
}
