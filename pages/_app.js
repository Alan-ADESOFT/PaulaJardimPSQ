import localFont from 'next/font/local';
import '@/styles/globals.css';

const fraunces = localFont({
  src: [
    { path: '../styles/fonts/fraunces-normal.woff2', weight: '100 900', style: 'normal' },
    { path: '../styles/fonts/fraunces-italic.woff2', weight: '100 900', style: 'italic' },
  ],
  display: 'swap',
  fallback: ['Georgia', 'Times New Roman', 'serif'],
});

const inter = localFont({
  src: [{ path: '../styles/fonts/inter.woff2', weight: '100 900', style: 'normal' }],
  display: 'swap',
  fallback: ['Helvetica Neue', 'Arial', 'sans-serif'],
});

const alexBrush = localFont({
  src: [{ path: '../styles/fonts/alex-brush.woff2', weight: '400', style: 'normal' }],
  display: 'swap',
  fallback: ['Snell Roundhand', 'cursive'],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-fraunces: ${fraunces.style.fontFamily};
          --font-inter: ${inter.style.fontFamily};
          --font-alex-brush: ${alexBrush.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
