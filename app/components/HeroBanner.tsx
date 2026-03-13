'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import s from './HeroBanner.module.scss';

const SLIDES = [
  {
    title: 'ГБПОО ЛАСК им. А.С. Шеремета',
    desc: 'Луганский архитектурно-строительный колледж — качественное профессиональное образование и современный подход к обучению.',
    btn: 'Подробнее о колледже',
    href: '/college',
    bg: 'linear-gradient(135deg, #0a1940 0%, #1a56db 100%)',
  },
  {
    title: 'Приём абитуриентов 2026',
    desc: 'Открыт набор на новый учебный год. Узнайте о специальностях, документах и сроках подачи заявлений.',
    btn: 'Абитуриентам',
    href: '/applicants',
    bg: 'linear-gradient(135deg, #0f4c3a 0%, #16a34a 100%)',
  },
  {
    title: '2026 — Год единства народов России',
    desc: 'Колледж активно участвует в мероприятиях, посвящённых Году единства народов России.',
    btn: 'Узнать больше',
    href: '/college',
    bg: 'linear-gradient(135deg, #6b1a1a 0%, #c0392b 100%)',
  },
  {
    title: 'Изменения в расписании',
    desc: 'Следите за актуальными изменениями в расписании занятий и будьте в курсе обновлений.',
    btn: 'Посмотреть расписание',
    href: '/schedule-changes',
    bg: 'linear-gradient(135deg, #5b370f 0%, #d97706 100%)',
  },
];

export default function HeroBanner() {
  return (
    <section className={s.hero}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        speed={700}
      >
        {SLIDES.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className={s.slide} style={{ background: slide.bg }}>
              <div className={s.slideContent}>
                <h2 className={s.slideTitle}>{slide.title}</h2>
                <p className={s.slideDesc}>{slide.desc}</p>
                <Link href={slide.href} className={s.slideBtn}>
                  {slide.btn}
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
