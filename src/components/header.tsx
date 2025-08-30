'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { ThemeToggleButton } from '@/components/theme-toggle-button';
import { useState, useEffect } from 'react';
import { AndroidIcon } from './icons/android-icon';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false); // Scrolling down
      } else {
        setIsHeaderVisible(true); // Scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-transform duration-300",
      !isHeaderVisible && "-translate-y-full"
    )}>
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            
            <span className="font-bold">Saubhagyaranjan</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-6">
           <nav className="hidden text-sm font-medium md:flex space-x-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="transition-colors hover:text-primary"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-2">
            <ThemeToggleButton />
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <Link href="/" className="mr-6 flex items-center space-x-2" onClick={() => setIsSheetOpen(false)}>
                  
                  <span className="font-bold">Saubhagyaranjan</span>
                </Link>
                <div className="my-4 h-[calc(100vh-8rem)]">
                  <div className="flex flex-col space-y-3">
                    {navLinks.map(({ href, label }) => (
                      <Link
                        key={label}
                        href={href}
                        onClick={() => setIsSheetOpen(false)}
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
