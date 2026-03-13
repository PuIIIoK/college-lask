import type { LucideIcon } from 'lucide-react';
import s from './StubPage.module.scss';

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function StubPage({ icon: Icon, title, description }: Props) {
  return (
    <div className={`container ${s.stub}`}>
      <div className={s.header}>
        <span className={s.icon}>
          <Icon size={26} />
        </span>
        <h1 className={s.title}>{title}</h1>
      </div>
      <p className={s.desc}>{description}</p>
      <div className={s.placeholder}>
        Раздел находится в разработке. Контент будет добавлен в ближайшее время.
      </div>
    </div>
  );
}
