'use client'
import '@/assets/scss/style.scss';
import dynamic from 'next/dynamic';

const LayoutProvider = dynamic(() => import('@/context/useLayoutContext').then((mod) => mod.LayoutProvider), {
  ssr: false,
})

import 'aos/dist/aos.css';
import AppProvidersWrapper from '../components/wrappers/AppProvidersWrapper';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <AppProvidersWrapper >
        <LayoutProvider>
          {children}
        </LayoutProvider>
        </AppProvidersWrapper>
      </body>
    </html>
  );
}
