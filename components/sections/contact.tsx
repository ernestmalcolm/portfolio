"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { ConfirmPlaceholder } from "@/components/confirm-placeholder";
import { SectionHeader } from "@/components/section-header";
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
    <section id="contact" className="section-pad scroll-mt-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          label="Reach out"
          title="Contact"
          description="Product work, consulting, or just saying hi."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-sm">
            <dl className="space-y-4">
              <div>
                <dt className="section-label">Email</dt>
                <dd className="mt-1">
                  {siteConfig.email ? (
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-foreground hover:text-coral"
                    >
                      {siteConfig.email}
                    </a>
                  ) : (
                    <ConfirmPlaceholder label="public email" />
                  )}
                </dd>
              </div>
              <div>
                <dt className="section-label">Phone</dt>
                <dd className="mt-1">
                  {siteConfig.phone ? (
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="text-foreground hover:text-coral"
                    >
                      {siteConfig.phone}
                    </a>
                  ) : (
                    <ConfirmPlaceholder label="public phone" />
                  )}
                </dd>
              </div>
            </dl>

            <ul className="space-y-2 border-t border-border/40 pt-6">
              {[
                { label: "LinkedIn", href: siteConfig.social.linkedin },
                { label: "GitHub", href: siteConfig.social.github },
                { label: "X", href: siteConfig.social.twitter },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-coral"
                  >
                    {label} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 border-t border-border/40 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0"
            noValidate
          >
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                autoComplete="name"
                spellCheck={false}
                {...register("name")}
              />
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
                spellCheck={false}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-xs text-destructive">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                rows={5}
                placeholder="What you're working on…"
                {...register("message")}
              />
              {errors.message && (
                <p className="text-xs text-destructive">
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button type="submit" disabled={status === "loading"}>
              {status === "loading" && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden />
              )}
              {status === "loading" ? "Sending…" : "Send message"}
            </Button>

            {status === "success" && (
              <p className="text-sm text-coral" role="status">
                Message sent. I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-destructive" role="alert">
                {errorMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
