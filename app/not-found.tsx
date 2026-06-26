import Link from "next/link";

import { ConfirmPlaceholder } from "@/components/confirm-placeholder";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 pb-24 pt-32 text-center">
      <p className="text-6xl font-bold text-coral">404</p>
      <h1 className="mt-4 max-w-lg text-balance">Page not found</h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        {/* TODO: [CONFIRM] — pick favourite Office quote for 404 */}
        <ConfirmPlaceholder label="Office 404 quote — confirm" />
        <span className="mt-3 block italic">
          &ldquo;I&apos;m not superstitious, but I am a little stitious.&rdquo;
        </span>
      </p>
      <Button asChild className="mt-8 rounded-full" size="lg">
        <Link href="/">Take me home</Link>
      </Button>
    </main>
  );
}
