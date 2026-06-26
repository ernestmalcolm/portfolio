"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion, useReducedMotion } from "framer-motion";
import { Loader2, Mail, Phone } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { ConfirmPlaceholder } from "@/components/confirm-placeholder";
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/icons/social-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/site-config";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactSection() {
  const reduceMotion = useReducedMotion();
  const [status, setStatus] = React.useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("loading");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error ?? "Something went wrong");
      }

      setStatus("success");
      reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send message",
      );
    }
  }

  return (
    <section id="contact" className="section-pad border-t border-border/40">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2>Contact</h2>
          <p className="mt-4 text-muted-foreground">
            Product work, consulting, or just saying hi — send a message or use
            the links below.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl border border-border/60 bg-card/40 p-6">
              <h3 className="font-semibold">Direct</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-coral" aria-hidden />
                  {siteConfig.email ? (
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="hover:text-coral"
                    >
                      {siteConfig.email}
                    </a>
                  ) : (
                    <ConfirmPlaceholder label="Email — Ernest to confirm" />
                  )}
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-coral" aria-hidden />
                  {siteConfig.phone ? (
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="hover:text-coral"
                    >
                      {siteConfig.phone}
                    </a>
                  ) : (
                    <ConfirmPlaceholder label="Phone — Ernest to confirm" />
                  )}
                </li>
                <li>
                  <Link
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-coral"
                  >
                    LinkedIn →
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex gap-3">
              {[
                { label: "GitHub", href: siteConfig.social.github, icon: GitHubIcon },
                {
                  label: "LinkedIn",
                  href: siteConfig.social.linkedin,
                  icon: LinkedInIcon,
                },
                { label: "X", href: siteConfig.social.twitter, icon: XIcon },
              ].map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-coral hover:text-coral"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8"
            noValidate
          >
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" autoComplete="name" {...register("name")} />
              {errors.name && (
                <p className="text-xs text-destructive">{errors.name.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-xs text-destructive">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" rows={5} {...register("message")} />
              {errors.message && (
                <p className="text-xs text-destructive">
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full rounded-full"
              disabled={status === "loading"}
            >
              {status === "loading" && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden />
              )}
              Send message
            </Button>

            {status === "success" && (
              <p className="text-sm text-coral" role="status">
                Message sent — I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-destructive" role="alert">
                {errorMessage}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
