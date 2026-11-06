"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { EpisodeCard } from "@/components/doc/episode-card";
import { StickyNote } from "@/components/doc/sticky-note";
import { reception } from "@/content/show";
import { siteConfig } from "@/lib/site-config";

const contactSchema = z.object({
  name: z.string().min(2, "Add your name so Ernest knows who to call back."),
  email: z.email("That email doesn't look right. Check it and try again."),
  message: z.string().min(10, "Add a little more detail, at least 10 characters."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const fieldClass =
  "w-full border-0 border-b-2 border-rule bg-transparent px-0.5 text-lg text-ink focus-visible:border-pen aria-[invalid=true]:border-stamp";

/** Contact, on every page: episode card, details, sticky note and the sign-in sheet */
export function Reception() {
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

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
      setErrorMessage(error instanceof Error ? error.message : "Your message didn't send.");
    }
  }

  const field = (name: keyof ContactFormValues, label: string, input: React.ReactNode) => (
    <div className="flex flex-col gap-1">
      <label htmlFor={`reception-${name}`} className="font-mono text-[13px] text-muted">
        {label}
      </label>
      {input}
      {errors[name] && (
        <p id={`reception-${name}-error`} className="text-sm text-stamp">
          {errors[name]?.message}
        </p>
      )}
    </div>
  );

  const aria = (name: keyof ContactFormValues) => ({
    id: `reception-${name}`,
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `reception-${name}-error` : undefined,
  });

  return (
    <section id="reception" aria-labelledby="reception-title" className="bg-panel">
      <EpisodeCard
        as="h2"
        id="reception-title"
        label={reception.episode}
        title={reception.title}
        explainer={reception.explainer}
        className="py-10"
      />
      <div className="container-page flex flex-col gap-14 pb-[88px] pt-[72px] min-[900px]:flex-row">
        <div className="min-w-0 min-[900px]:flex-[1_1_340px]">
          <p className="text-muted-deep">{reception.intro}</p>
          <dl className="mt-7 grid grid-cols-[90px_minmax(0,1fr)] gap-x-4 gap-y-2.5 text-base">
            <dt className="pt-[3px] font-mono text-[13px] text-muted">Email</dt>
            <dd className="break-words">
              <a href={`mailto:${siteConfig.email}`} className="underline">
                {siteConfig.email}
              </a>
            </dd>
            <dt className="pt-[3px] font-mono text-[13px] text-muted">Phone</dt>
            <dd>
              <a href={`tel:${siteConfig.phone}`} className="underline">
                {siteConfig.phoneDisplay}
              </a>
            </dd>
            <dt className="pt-[3px] font-mono text-[13px] text-muted">LinkedIn</dt>
            <dd className="break-words">
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="underline">
                linkedin.com/in/ernestmwinchumu
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </dd>
          </dl>
          <StickyNote className="mt-7 w-[210px]">{reception.stickyNote}</StickyNote>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          aria-labelledby="reception-form-title"
          className="min-w-0 rounded bg-white px-6 pb-9 pt-8 shadow-[0_10px_26px_rgba(18,20,23,0.1)] sm:px-8 min-[900px]:flex-[1_1_480px]"
        >
          <p id="reception-form-title" className="font-condensed text-[22px] font-bold">
            {reception.formTitle}
          </p>
          <div className="mt-5 flex flex-col gap-[18px]">
            {field(
              "name",
              "Name",
              <input type="text" autoComplete="name" spellCheck={false} className={`${fieldClass} py-2`} {...aria("name")} {...register("name")} />,
            )}
            {field(
              "email",
              "Email",
              <input type="email" autoComplete="email" spellCheck={false} className={`${fieldClass} py-2`} {...aria("email")} {...register("email")} />,
            )}
            {field(
              "message",
              "Reason for visit",
              <textarea rows={4} className={`${fieldClass} ruled resize-y py-1.5 leading-8`} {...aria("message")} {...register("message")} />,
            )}
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-[26px] min-h-[48px] rounded bg-pen px-[26px] font-semibold text-white hover:bg-pen-dark disabled:opacity-60"
          >
            {status === "loading" ? reception.sending : reception.submit}
          </button>

          <div aria-live="polite" className="mt-4">
            {status === "success" && <p className="text-muted-deep">{reception.success}</p>}
            {status === "error" && (
              <p className="text-stamp">
                {errorMessage} Try again in a minute, or email{" "}
                <a href={`mailto:${siteConfig.email}`} className="underline">
                  {siteConfig.email}
                </a>{" "}
                directly.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
