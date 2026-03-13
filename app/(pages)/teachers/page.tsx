import { BookOpen } from 'lucide-react';
import StubPage from '../../components/StubPage/StubPage';

export const metadata = { title: 'Преподавателям — ГБПОО ЛАСК' };

export default function TeachersPage() {
  return (
    <StubPage
      icon={BookOpen}
      title="Преподавателям"
      description="Методические материалы, нормативные документы, повышение квалификации, аттестация и полезные ресурсы для педагогического коллектива."
    />
  );
}
