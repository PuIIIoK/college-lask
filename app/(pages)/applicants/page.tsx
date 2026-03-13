import { UserPlus } from 'lucide-react';
import StubPage from '../../components/StubPage/StubPage';

export const metadata = { title: 'Абитуриентам — ГБПОО ЛАСК' };

export default function ApplicantsPage() {
  return (
    <StubPage
      icon={UserPlus}
      title="Абитуриентам"
      description="Информация о приёме, перечень специальностей, необходимые документы, сроки подачи заявлений и подготовительные курсы."
    />
  );
}
