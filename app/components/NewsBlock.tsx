import {
  Calendar,
  ArrowRight,
  Newspaper,
  Award,
  PartyPopper,
  Landmark,
  Megaphone,
  BookOpenCheck,
} from 'lucide-react';
import Link from 'next/link';
import s from './NewsBlock.module.scss';

const ICON_MAP = [Newspaper, Award, PartyPopper, Landmark, Megaphone, BookOpenCheck];

const NEWS = [
  {
    date: '12 марта 2026',
    title: 'День открытых дверей в ЛАСК',
    excerpt:
      'Приглашаем будущих абитуриентов и их родителей познакомиться со специальностями колледжа, преподавателями и студенческой жизнью.',
    href: '/news/open-day',
  },
  {
    date: '5 марта 2026',
    title: 'Итоги научно-практической конференции',
    excerpt:
      'Студенты колледжа представили свои проекты на ежегодной конференции и заняли призовые места.',
    href: '/news/conference',
  },
  {
    date: '28 февраля 2026',
    title: 'Обновление материально-технической базы',
    excerpt:
      'Колледж получил новое лабораторное оборудование для подготовки специалистов строительных специальностей.',
    href: '/news/equipment',
  },
  {
    date: '20 февраля 2026',
    title: 'Масленица в ЛАСК',
    excerpt:
      'Студенты и преподаватели отпраздновали Масленицу — с блинами, конкурсами и хорошим настроением.',
    href: '/news/maslenitsa',
  },
  {
    date: '14 февраля 2026',
    title: 'Спортивные достижения',
    excerpt:
      'Команда колледжа по волейболу вышла в финал регионального первенства среди ССУЗов.',
    href: '/news/sport',
  },
  {
    date: '1 февраля 2026',
    title: 'Старт подготовительных курсов',
    excerpt:
      'Открыта запись на подготовительные курсы для поступающих в колледж в 2026 году.',
    href: '/news/courses',
  },
];

export default function NewsBlock() {
  return (
    <section className={`section ${s.news}`}>
      <div className="container">
        <h2 className="section__title">Новости колледжа</h2>

        <div className={s.grid}>
          {NEWS.map((item, i) => {
            const Icon = ICON_MAP[i % ICON_MAP.length];
            return (
              <Link href={item.href} key={i} className={s.card}>
                <div className={s.cardImage}>
                  <Icon size={48} strokeWidth={1.2} />
                </div>
                <div className={s.cardBody}>
                  <span className={s.cardDate}>
                    <Calendar size={13} />
                    {item.date}
                  </span>
                  <h3 className={s.cardTitle}>{item.title}</h3>
                  <p className={s.cardExcerpt}>{item.excerpt}</p>
                  <span className={s.cardLink}>
                    Читать далее <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className={s.more}>
          <Link href="/news" className={s.moreBtn}>
            Все новости <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
