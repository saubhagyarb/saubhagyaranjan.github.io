'use client';
import Script from 'next/script';

export default function InstagramFeed() {
  return (
    <section id="instagram" className="container py-12 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">
          Follow My Journey
        </h2>
        <p className="mt-4 text-lg text-muted-foreground md:text-xl/relaxed">
          A glimpse into my latest projects and daily life on Instagram.
        </p>
      </div>
      <div className="mt-12 rounded-lg h-[600px] overflow-y-auto" style={{ backgroundColor: '#f7faff' }}>
        <div className='sk-instagram-feed' data-embed-id='25592119'></div>
        <Script src='https://widgets.sociablekit.com/instagram-feed/widget.js' strategy="lazyOnload" />
      </div>
    </section>
  );
}
