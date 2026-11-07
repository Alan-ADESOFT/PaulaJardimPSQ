import { useEffect, useRef } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { SITE_URL, META_PIXEL_ID } from '@/libs/config';
import { initLandingPage } from '@/libs/animations';
import PageOverlays from '@/components/PageOverlays/PageOverlays';
import IntroSignature from '@/components/IntroSignature/IntroSignature';
import Hero from '@/components/Hero/Hero';
import Intro from '@/components/Intro/Intro';
import Journey from '@/components/Journey/Journey';
import Psp from '@/components/Psp/Psp';
import Psq from '@/components/Psq/Psq';
import Vault from '@/components/Vault/Vault';
import About from '@/components/About/About';
import Faq from '@/components/Faq/Faq';
import Application from '@/components/Application/Application';
import Footer from '@/components/Footer/Footer';

const TITLE = 'Protocolos PSP e PSQ | Paula Jardim';
const SHARE_TITLE = 'Você cresce. O resultado fica. | Paula Jardim';
const DESCRIPTION =
  'Uma rota com dois protocolos individualizados para empresários, líderes e profissionais que cansaram de recomeçar e querem aumentar o faturamento, sustentá-lo e crescer sem abrir mão da paz mental.';
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export default function Home() {
  const rootRef = useRef(null);

  useEffect(() => {
    initLandingPage(rootRef.current);
  }, []);

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:title" content={SHARE_TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {SITE_URL && <meta property="og:url" content={SITE_URL} />}
        {SITE_URL && <link rel="canonical" href={SITE_URL} />}
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preload" as="image" href="/images/hero.webp" fetchPriority="high" />
      </Head>

      {META_PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`}
        </Script>
      )}

      <div className="pj" id="pj" ref={rootRef}>
        <PageOverlays />
        <IntroSignature />
        <main>
          <Hero />
          <Intro />
          <Journey />
          <Psp />
          <Psq />
          <Vault />
          <About />
          <Faq />
          <Application />
        </main>
        <Footer />
      </div>
    </>
  );
}
