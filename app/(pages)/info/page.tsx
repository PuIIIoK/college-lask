import { Info } from 'lucide-react';
import StubPage from '../../components/StubPage/StubPage';

export const metadata = { title: 'Сведения об ОУ — ГБПОО ЛАСК' };

export default function InfoPage() {
  return (
    <StubPage
      icon={Info}
      title="Сведения об образовательной организации"
      description="Основные сведения, документы, лицензии, свидетельства об аккредитации, структура и органы управления образовательной организацией."
    />
  );
}
