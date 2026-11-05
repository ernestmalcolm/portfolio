"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { ConfirmPlaceholder } from "@/components/confirm-placeholder";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/site-config";

const contactSchema = z.object({
  name: z.string().min(2, "Add your name so I know who to reply to."),
  email: z.email("That email doesn't look right. Check it and try again."),
  message: z.string().min(10, "Add a little more detail, at least 10 characters."),
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
        throw new Error(data.error ?? "Your message didn't send.");
      }

      setStatus("success");
      reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Your message didn't send.",
      );
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-16 md:py-24">
      <div className="container-page grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <h2 id="contact-heading">Contact</h2>
          <p className="mt-4 max-w-prose text-lg">
            Product work, consulting, or a conversation worth having. Email is
            fastest.
          </p>

          <dl className="mt-8 space-y-5">
            <div>
              <dt className="text-sm text-muted">Email</dt>
              <dd className="mt-1">
                {siteConfig.email ? (
                  <a href={`mailto:${siteConfig.email}`} className="link text-lg">
                    {siteConfig.email}
                  </a>
                ) : (
                  <ConfirmPlaceholder label="public email" />
                )}
              </dd>
            </div>
            <div>
              <dt className="text-sm text-muted">Phone</dt>
              <dd className="mt-1">
                {siteConfig.phone ? (
                  <a href={`tel:${siteConfig.phone}`} className="link-quiet text-lg">
                    {siteConfig.phoneDisplay}
                  </a>
                ) : (
                  <ConfirmPlaceholder label="public phone" />
                )}
              </dd>
            </div>
            <div>
              <dt className="text-sm text-muted">LinkedIn</dt>
              <dd className="mt-1">
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-quiet text-lg"
                >
                  linkedin.com/in/ernestmwinchumu
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              autoComplete="name"
              spellCheck={false}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              {...register("name")}
            />
            {errors.name && (
              <p id="name-error" className="text-sm text-coral">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              spellCheck={false}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email")}
            />
            {errors.email && (
              <p id="email-error" className="text-sm text-coral">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              rows={5}
              placeholder="What you're working on"
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              {...register("message")}
            />
            {errors.message && (
              <p id="message-error" className="text-sm text-coral">
                {errors.message.message}
              </p>
            )}
          </div>

          <Button type="submit" disabled={status === "loading"}>
            {status === "loading" && <Loader2 className="animate-spin" aria-hidden />}
            {status === "loading" ? "Sending" : "Send message"}
          </Button>

          <div aria-live="polite">
            {status === "success" && (
              <p className="text-mist">
                Message received. Unlike some invoices, this one is certified.
                I&apos;ll reply soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-coral">
                {errorMessage} You can also email me at{" "}
                <a href={`mailto:${siteConfig.email}`} className="underline">
                  {siteConfig.email}
                </a>
                .
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
