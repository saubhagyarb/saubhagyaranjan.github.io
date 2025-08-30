
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Download, Eye } from 'lucide-react';
import Link from 'next/link';

export default function ResumeDisplay() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const resumeUrl = "/Saubhagyaranjan_Behera_AndroidDev.pdf";

  return (
    <section id="resume" className="w-full py-16 md:py-24 lg:py-32 bg-muted/40">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <div className="relative w-full max-w-sm cursor-pointer group overflow-hidden rounded-lg shadow-2xl">
                <div className="relative w-full h-[500px] border rounded-lg overflow-hidden">
                  <iframe
                    src={`${resumeUrl}#view=fitH`}
                    className="w-full h-full"
                    title="Resume Preview"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <div className="text-white text-lg font-semibold flex items-center gap-2">
                        <Eye className="h-6 w-6" />
                        <span>View Resume</span>
                    </div>
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl w-full h-[90vh] p-0 flex flex-col">
              <DialogHeader className="p-4 border-b">
                <DialogTitle>My Resume</DialogTitle>
              </DialogHeader>
              <div className="flex-1">
                <iframe
                  src={resumeUrl}
                  className="w-full h-full"
                  title="My Resume"
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">
            My Resume
          </h2>
          <p className="mt-4 max-w-[700px] text-lg text-muted-foreground md:text-xl/relaxed">
            Here's a detailed look at my qualifications. You can view it directly or download a copy for your convenience.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href={resumeUrl} download="Saubhagyaranjan_Behera.pdf">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
