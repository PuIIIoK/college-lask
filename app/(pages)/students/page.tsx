import { GraduationCap } from 'lucide-react';
import StubPage from '../../components/StubPage/StubPage';

export const metadata = { title: 'Студентам — ГБПОО ЛАСК' };

export default function StudentsPage() {
  return (
    <StubPage
      icon={GraduationCap}
      title="Студентам"
      description="Расписание занятий, учебные материалы, внеклассные мероприятия, студенческое самоуправление и полезная информация для обучающихся."
    />
  );
}
