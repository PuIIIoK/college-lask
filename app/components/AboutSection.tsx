import Link from 'next/link';
import { ArrowRight, GraduationCap } from 'lucide-react';
import s from './AboutSection.module.scss';

export default function AboutSection() {
  return (
    <section className={`section ${s.about}`}>
      <div className="container">
        <div className={s.inner}>
          {/* Visual block */}
          <div className={s.visual}>
            <GraduationCap size={64} strokeWidth={1.2} />
            <span className={s.visualYear}>2026</span>
            <span className={s.visualLabel}>
              Год единства народов России
            </span>
          </div>

          {/* Text content */}
          <div className={s.text}>
            <h2 className={s.title}>
              Луганский архитектурно-строительный колледж
            </h2>
            <p className={s.desc}>
              ГБПОО ЛАСК им. А.С. Шеремета — ведущее учебное заведение
              Луганской Народной Республики в сфере архитектуры и строительства.
              Колледж сочетает многолетние традиции профессионального
              образования с современными технологиями обучения.
            </p>
            <p className={s.desc}>
              Наши выпускники востребованы на рынке труда и успешно
              реализуют себя в строительной, архитектурной и проектной
              деятельности.
            </p>

            <div className={s.stats}>
              <div className={s.stat}>
                <span className={s.statValue}>50+</span>
                <span className={s.statLabel}>лет опыта</span>
              </div>
              <div className={s.stat}>
                <span className={s.statValue}>1200+</span>
                <span className={s.statLabel}>студентов</span>
              </div>
              <div className={s.stat}>
                <span className={s.statValue}>8</span>
                <span className={s.statLabel}>специальностей</span>
              </div>
            </div>

            <Link href="/college" className={s.btn}>
              Подробнее <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
