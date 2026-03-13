'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  Sun,
  Moon,
  Menu,
  X,
  Building2,
  GraduationCap,
  Users,
  BookOpen,
  UserPlus,
  ShoppingCart,
  CalendarClock,
} from 'lucide-react';
import { useTheme } from '../ThemeProvider';
import s from './Header.module.scss';

const NAV_ITEMS = [
  { label: 'Сведения об ОУ', href: '/info', icon: Building2 },
  { label: 'Колледж', href: '/college', icon: GraduationCap },
  { label: 'Студентам', href: '/students', icon: Users },
  { label: 'Преподавателям', href: '/teachers', icon: BookOpen },
  { label: 'Абитуриентам', href: '/applicants', icon: UserPlus },
  { label: 'Госзакупки', href: '/procurement', icon: ShoppingCart },
  {
    label: 'Изменения в расписании',
    href: '/schedule-changes',
    icon: CalendarClock,
    highlight: true,
  },
];

export default function Header() {
  const { theme, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.topBar}>
          {/* Logo */}
          <Link href="/" className={s.logo}>
            <span className={s.logoIcon}>ЛАСК</span>
            <span className={s.logoText}>
              <span className={s.logoTitle}>ГБПОО ЛАСК</span>
              <span className={s.logoSub}>им. А.С. Шеремета</span>
            </span>
          </Link>

          {/* Actions */}
          <div className={s.headerActions}>
            <button
              className={s.themeBtn}
              onClick={toggle}
              aria-label="Переключить тему"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <button
              className={s.burgerBtn}
              onClick={() => setMenuOpen(true)}
              aria-label="Открыть меню"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`${s.nav} ${menuOpen ? s.open : ''}`}>
        <button
          className={s.mobileClose}
          onClick={() => setMenuOpen(false)}
          aria-label="Закрыть меню"
        >
          <X size={24} />
        </button>

        <div className="container">
          <ul className={s.navList}>
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.href} className={s.navItem}>
                  <Link
                    href={item.href}
                    className={`${s.navLink} ${item.highlight ? s.scheduleHighlight : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <Icon size={16} />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
