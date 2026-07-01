import React from 'react';
import { motion } from 'framer-motion';
import { Editable } from './Editable';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Mock submission
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Let's Connect</h2>
            <h3 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
              <Editable>[Let's Connect]</Editable>
            </h3>
            <p className="text-lg text-muted-foreground mb-12">
              <Editable>[I am open to learning opportunities, collaboration, and software development projects that help me grow my skills.]</Editable>
            </p>

            <div className="space-y-6 text-lg">
              <div>
                <span className="block text-sm text-muted-foreground font-medium mb-1">Email</span>
                <a href="mailto:leletukamana9@outlook.com" className="font-medium text-foreground hover:text-primary transition-colors">
                  <Editable>[leletukamana9@outlook.com]</Editable>
                </a>
              </div>
              <div>
                <span className="block text-sm text-muted-foreground font-medium mb-1">LinkedIn</span>
                <a href="https://www.linkedin.com/in/leletu-kamana-1a22b8416" className="font-medium text-foreground hover:text-primary transition-colors">
                  <Editable>[linkedin.com/in/leletu-kamana-1a22b8416]</Editable>
                </a>
              </div>
              <div>
                <span className="block text-sm text-muted-foreground font-medium mb-1">Phone / Location</span>
                <a href="tel:+27725813872" className="font-medium text-foreground hover:text-primary transition-colors">
                  <Editable>[072 581 3872 | Port Elizabeth, 6385]</Editable>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-card p-8 rounded-3xl border border-border shadow-sm">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane Doe" {...field} className="bg-background" />
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
                          <Input placeholder="jane@example.com" type="email" {...field} className="bg-background" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Project Inquiry" {...field} className="bg-background" />
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
                        <Textarea 
                          placeholder="Tell me about your project..." 
                          className="min-h-[150px] resize-none bg-background" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full text-base h-12 rounded-xl">
                  <Editable>[Send Message]</Editable>
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
