'use client';
import Script from 'next/script';

export default function LinkedInFeed() {
  return (
    <section id="linkedin" className="container py-12 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">
          My LinkedIn Posts
        </h2>
        <p className="mt-4 text-lg text-muted-foreground md:text-xl/relaxed">
          Check out my latest updates and articles on LinkedIn.
        </p>
      </div>
      <div className="mt-12 rounded-lg bg-[#f7faff] h-[600px] overflow-y-auto p-4">
        <div className='sk-ww-linkedin-profile-post' data-embed-id='25592136'></div>
        <Script src='https://widgets.sociablekit.com/linkedin-profile-posts/widget.js' strategy="lazyOnload" defer />
      </div>
    </section>
  );
}
