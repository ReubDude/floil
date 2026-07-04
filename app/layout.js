import './globals.css';
import { Inter, Inter_Tight } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'FLOIL — Load Faster. Work Smarter.',
  description:
    'FLOIL is a patented professional hair foil with a pre-formed loading lip for faster, one-handed loading. A better tool for highlighting. Patent pending.',
  metadataBase: new URL('https://floil.com'),
  openGraph: {
    title: 'FLOIL — Load Faster. Work Smarter.',
    description:
      'A patented professional hair foil designed to streamline highlighting with faster, one-handed loading.',
    images: ['/images/Floil2.png'],
    type: 'website',
  },
  icons: { icon: '/icon.svg' },
};

export const viewport = {
  themeColor: '#FAFAF8',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
