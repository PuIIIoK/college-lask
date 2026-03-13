import type { Metadata } from 'next';
import ThemeProvider from './components/ThemeProvider';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './styles/globals.scss';

export const metadata: Metadata = {
  title: 'ГБПОО ЛАСК им. А.С. Шеремета',
  description:
    'Луганский архитектурно-строительный колледж — профессиональное образование в сфере архитектуры и строительства.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
