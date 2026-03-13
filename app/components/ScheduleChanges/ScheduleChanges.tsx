'use client';

import { CalendarClock, Replace, XCircle, MapPin, PlusCircle } from 'lucide-react';
import s from './ScheduleChanges.module.scss';

type ChangeType = 'replace' | 'cancel' | 'room' | 'extra';

interface ScheduleChange {
  date: string;
  group: string;
  pair: string;
  original: string;
  replacement: string;
  type: ChangeType;
}

const BADGE_MAP: Record<ChangeType, { label: string; cls: string; icon: typeof Replace }> = {
  replace: { label: 'Замена', cls: s.badgeReplace, icon: Replace },
  cancel: { label: 'Отмена', cls: s.badgeCancel, icon: XCircle },
  room: { label: 'Смена ауд.', cls: s.badgeRoom, icon: MapPin },
  extra: { label: 'Доп. пара', cls: s.badgeExtra, icon: PlusCircle },
};

const CHANGES: ScheduleChange[] = [
  {
    date: '13.03.2026',
    group: 'СТ-31',
    pair: '2 пара',
    original: 'Математика (Иванов И.И.)',
    replacement: 'Физика (Петров П.П.), ауд. 312',
    type: 'replace',
  },
  {
    date: '13.03.2026',
    group: 'АР-21',
    pair: '3 пара',
    original: 'Архитектурное проектирование',
    replacement: 'Занятие отменено',
    type: 'cancel',
  },
  {
    date: '13.03.2026',
    group: 'ПГС-11',
    pair: '1 пара',
    original: 'Начертательная геометрия, ауд. 205',
    replacement: 'Перенос в ауд. 410',
    type: 'room',
  },
  {
    date: '14.03.2026',
    group: 'СТ-31',
    pair: '4 пара',
    original: '—',
    replacement: 'Консультация по дипломному проекту (Сидоров С.С.), ауд. 101',
    type: 'extra',
  },
  {
    date: '14.03.2026',
    group: 'АР-22',
    pair: '2 пара',
    original: 'История архитектуры (Козлова А.В.)',
    replacement: 'Компьютерная графика (Морозов Д.К.), ауд. 308',
    type: 'replace',
  },
  {
    date: '15.03.2026',
    group: 'ПГС-21',
    pair: '1-2 пара',
    original: 'Строительные материалы',
    replacement: 'Занятия отменены (лекция в актовом зале)',
    type: 'cancel',
  },
];

export default function ScheduleChanges() {
  return (
    <div className={`container ${s.page}`}>
      <div className={s.header}>
        <h1 className={s.title}>
          <CalendarClock size={28} />
          Изменения в расписании
        </h1>
        <p className={s.subtitle}>
          Актуальные замены, отмены и переносы занятий
        </p>
      </div>

      {/* Desktop table */}
      <div className={s.desktopTable}>
        <table className={s.table}>
          <thead>
            <tr>
              <th>Дата</th>
              <th>Группа</th>
              <th>Пара</th>
              <th>По расписанию</th>
              <th>Изменение</th>
              <th>Тип</th>
            </tr>
          </thead>
          <tbody>
            {CHANGES.map((ch, i) => {
              const badge = BADGE_MAP[ch.type];
              const Icon = badge.icon;
              return (
                <tr key={i}>
                  <td>{ch.date}</td>
                  <td><strong>{ch.group}</strong></td>
                  <td>{ch.pair}</td>
                  <td>{ch.original}</td>
                  <td>{ch.replacement}</td>
                  <td>
                    <span className={`${s.badge} ${badge.cls}`}>
                      <Icon size={13} />
                      {badge.label}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className={s.mobileCards}>
        {CHANGES.map((ch, i) => {
          const badge = BADGE_MAP[ch.type];
          const Icon = badge.icon;
          return (
            <div key={i} className={s.mCard}>
              <div className={s.mCardRow}>
                <span className={s.mCardLabel}>Дата</span>
                <span className={s.mCardValue}>{ch.date}</span>
              </div>
              <div className={s.mCardRow}>
                <span className={s.mCardLabel}>Группа</span>
                <span className={s.mCardValue}><strong>{ch.group}</strong></span>
              </div>
              <div className={s.mCardRow}>
                <span className={s.mCardLabel}>Пара</span>
                <span className={s.mCardValue}>{ch.pair}</span>
              </div>
              <div className={s.mCardRow}>
                <span className={s.mCardLabel}>Было</span>
                <span className={s.mCardValue}>{ch.original}</span>
              </div>
              <div className={s.mCardRow}>
                <span className={s.mCardLabel}>Стало</span>
                <span className={s.mCardValue}>{ch.replacement}</span>
              </div>
              <div style={{ marginTop: 4 }}>
                <span className={`${s.badge} ${badge.cls}`}>
                  <Icon size={13} />
                  {badge.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
