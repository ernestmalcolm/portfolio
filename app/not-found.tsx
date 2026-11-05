import Link from "next/link";

import { PageBackdrop } from "@/components/page-backdrop";

export default function NotFound() {
  return (
    <main className="container-page relative isolate pb-24 pt-16 md:pt-28">
      <PageBackdrop />
      <p className="font-mono text-sm text-coral">Error 404</p>
      <h1 className="mt-2 max-w-2xl">
        This page didn&apos;t get its fiscal receipt.
      </h1>
      <p className="mt-6 max-w-prose text-xl leading-snug">
        TRA is looking into it. In the meantime, the page you wanted
        doesn&apos;t exist or has moved.
      </p>
      <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
        <li>
          <Link href="/" className="link">
            Go to the home page
          </Link>
        </li>
        <li>
          <Link href="/work" className="link">
            See my work
          </Link>
        </li>
      </ul>
    </main>
  );
}
