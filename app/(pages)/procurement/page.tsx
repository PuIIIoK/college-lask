import { ShoppingCart } from 'lucide-react';
import StubPage from '../../components/StubPage/StubPage';

export const metadata = { title: 'Госзакупки — ГБПОО ЛАСК' };

export default function ProcurementPage() {
  return (
    <StubPage
      icon={ShoppingCart}
      title="Госзакупки"
      description="Информация о государственных закупках, контракты, планы-графики и закупочная документация колледжа."
    />
  );
}
