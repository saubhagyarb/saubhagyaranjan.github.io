'use client';

import Link from 'next/link';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function Fab() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button asChild size="icon" className="h-14 w-14 rounded-full shadow-lg">
              <Link href="#contact">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Contact Me</span>
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Contact Me</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
