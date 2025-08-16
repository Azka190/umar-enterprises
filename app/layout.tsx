import { Noto_Sans, Kanit } from 'next/font/google';
import './globals.css';

// Correct font setup for Noto Sans
const notoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto',
  weight: ['400', '700'],
});

// Correct font setup for Kanit
const kanit = Kanit({
  subsets: ['latin'],
  variable: '--font-kanit',
  weight: ['400', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${notoSans.variable} ${kanit.variable}`}>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
