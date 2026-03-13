import Link from 'next/link';
import {
  Building2,
  GraduationCap,
  Users,
  BookOpen,
  UserPlus,
  ShoppingCart,
  CalendarClock,
  Info,
} from 'lucide-react';
import s from './QuickLinks.module.scss';

const LINKS = [
  {
    title: 'Сведения об ОУ',
    desc: 'Документы, лицензии, аккредитация',
    href: '/info',
    icon: Info,
  },
  {
    title: 'Колледж',
    desc: 'История, руководство, структура',
    href: '/college',
    icon: Building2,
  },
  {
    title: 'Студентам',
    desc: 'Расписание, мероприятия, документы',
    href: '/students',
    icon: GraduationCap,
  },
  {
    title: 'Преподавателям',
    desc: 'Методические материалы, отчёты',
    href: '/teachers',
    icon: BookOpen,
  },
  {
    title: 'Абитуриентам',
    desc: 'Приём, специальности, подача документов',
    href: '/applicants',
    icon: UserPlus,
  },
  {
    title: 'Госзакупки',
    desc: 'Закупки, контракты, документация',
    href: '/procurement',
    icon: ShoppingCart,
  },
  {
    title: 'Изменения в расписании',
    desc: 'Актуальные замены и переносы занятий',
    href: '/schedule-changes',
    icon: CalendarClock,
    highlight: true,
  },
  {
    title: 'Год единства народов России',
    desc: 'Мероприятия и события 2026 года',
    href: '/unity-year',
    icon: Users,
  },
];

export default function QuickLinks() {
  return (
    <section className={`section ${s.quickLinks}`}>
      <div className="container">
        <h2 className="section__title">Разделы</h2>
        <div className={s.grid}>
          {LINKS.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${s.card} ${item.highlight ? s.schedule : ''}`}
              >
                <span className={s.cardIcon}>
                  <Icon size={26} />
                </span>
                <span className={s.cardTitle}>{item.title}</span>
                <span className={s.cardDesc}>{item.desc}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
