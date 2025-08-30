'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { GithubIcon } from '@/components/icons/github-icon';
import { LinkedinIcon } from './icons/linkedin-icon';
import { Instagram } from 'lucide-react';
import Link from 'next/link';
import { contact } from '@/ai/flows/contact-flow';
import type { ContactFlowInput } from '@/ai/schemas/contact-schema';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: ContactFlowInput) {
    setIsSubmitting(true);
    try {
      const result = await contact(values);
      if (result.success) {
        toast({
          title: 'Message Sent!',
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error(result.message || 'Failed to send message.');
      }
    } catch (error) {
      toast({
        title: 'Uh oh! Something went wrong.',
        description: error instanceof Error ? error.message : 'There was a problem sending your message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="container py-12 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">Get In Touch</h2>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl/relaxed">
            Have a project in mind or just want to say hello? Drop me a line.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell me about your project..." className="min-h-[150px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Form>
          <div className="flex flex-col justify-center space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <p className="text-muted-foreground">Find me on these platforms</p>
            </div>
            <div className="flex space-x-4">
               <Button variant="outline" size="icon" asChild>
                  <Link href="https://github.com/saubhagyarb" target="_blank"><GithubIcon className="h-6 w-6" /></Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://in.linkedin.com/in/saubhagyaranjan-behera-965a5b26b" target="_blank"><LinkedinIcon className="h-6 w-6" /></Link>
                </Button>
                 <Button variant="outline" size="icon" asChild>
                  <Link href="https://www.instagram.com/saubhagya.dev/" target="_blank"><Instagram className="h-6 w-6" /></Link>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
