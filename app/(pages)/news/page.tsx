import { Newspaper } from 'lucide-react';
import StubPage from '../../components/StubPage/StubPage';

export const metadata = { title: 'Новости — ГБПОО ЛАСК' };

export default function NewsPage() {
  return (
    <StubPage
      icon={Newspaper}
      title="Все новости"
      description="Последние новости, события и объявления Луганского архитектурно-строительного колледжа."
    />
  );
}
