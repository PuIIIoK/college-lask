import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
} from 'lucide-react';
import s from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.grid}>
          {/* About */}
          <div>
            <h4 className={s.colTitle}>ГБПОО ЛАСК им. А.С. Шеремета</h4>
            <p className={s.about}>
              Луганский архитектурно-строительный колледж — одно из ведущих учебных
              заведений профессионального образования региона. Готовим
              высококвалифицированных специалистов строительной отрасли.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className={s.colTitle}>Навигация</h4>
            <ul className={s.linkList}>
              {[
                { label: 'Сведения об ОУ', href: '/info' },
                { label: 'Колледж', href: '/college' },
                { label: 'Студентам', href: '/students' },
                { label: 'Абитуриентам', href: '/applicants' },
                { label: 'Госзакупки', href: '/procurement' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={s.link}>
                    <ArrowRight size={14} />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Student links */}
          <div>
            <h4 className={s.colTitle}>Студентам</h4>
            <ul className={s.linkList}>
              {[
                { label: 'Расписание', href: '/schedule-changes' },
                { label: 'Преподавателям', href: '/teachers' },
                { label: 'Год единства народов', href: '/unity-year' },
                { label: 'Все новости', href: '/news' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={s.link}>
                    <ArrowRight size={14} />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className={s.colTitle}>Контакты</h4>
            <div className={s.contactItem}>
              <MapPin size={16} />
              <span>г. Луганск, ул. Примерная, 1</span>
            </div>
            <div className={s.contactItem}>
              <Phone size={16} />
              <span>+7 (XXX) XXX-XX-XX</span>
            </div>
            <div className={s.contactItem}>
              <Mail size={16} />
              <span>info@lask-college.ru</span>
            </div>
            <div className={s.contactItem}>
              <Clock size={16} />
              <span>Пн–Пт: 8:00 – 17:00</span>
            </div>
          </div>
        </div>

        <div className={s.bottom}>
          <span className={s.copy}>© 2026 ГБПОО ЛАСК им. А.С. Шеремета. Все права защищены.</span>
          <div className={s.bottomLinks}>
            <Link href="/info" className={s.bottomLink}>
              Политика конфиденциальности
            </Link>
            <Link href="/info" className={s.bottomLink}>
              Карта сайта
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
