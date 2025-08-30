import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import avatar from "../public/projects/avatar.jpg"
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="hero" className="container flex flex-col items-center justify-center py-20 text-center md:py-32">
      <Avatar className="mx-auto mb-6 h-32 w-32 border-4 border-primary shadow-lg">
        <Image src={avatar} alt="Developer Avatar" className="rounded-full" />
        <AvatarFallback>AD</AvatarFallback>
      </Avatar>
      <h1 className="font-headline scroll-m-20 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
        Saubhagyaranjan Behera
      </h1>
      <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
        Crafting delightful <span className="font-semibold text-primary">Android</span> experiences, one line of code at a time.
      </p>
      <div className="mt-6 w-full max-w-lg rounded-lg bg-muted/50 p-4 shadow-inner">
        <pre className="overflow-x-auto">
          <code className="font-code text-sm text-left">
            <span className="text-purple-400">fun</span>{' '}
            <span className="text-accent">createAwesomeApp</span>
            <span>()</span> <span className="text-muted-foreground">=</span>{' '}
            <span>buildWith(</span>
            <span className="text-emerald-400">Kotlin</span>
            <span>, </span>
            <span className="text-emerald-400">JetpackCompose</span>
            <span>)</span>
          </code>
        </pre>
      </div>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
        <Button asChild size="lg">
          <Link href="#contact">Hire Me</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="#projects">My Work</Link>
        </Button>
      </div>
    </section>
  );
}
