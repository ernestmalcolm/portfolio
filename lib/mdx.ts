import fs from "node:fs/promises";
import path from "node:path";

import { compileMDX } from "next-mdx-remote/rsc";
import { createElement, type ReactNode } from "react";

/** The "If you only skim" box at the end of a memo */
function Skim({ children }: { children: ReactNode }) {
  return createElement(
    "div",
    { className: "not-prose mt-9 border-l-[5px] border-marker bg-[#F3F1E8] px-[26px] py-[22px] [&_li]:mt-1 [&_ol]:mt-2.5 [&_ol]:list-decimal [&_ol]:pl-[22px] [&_ol]:text-[#2E353D]" },
    createElement("p", { className: "font-condensed text-[22px] font-bold" }, "If you only skim"),
    children,
  );
}

const writingDirectory = path.join(process.cwd(), "content/writing");

export async function getMdxContent(slug: string) {
  const filePath = path.join(writingDirectory, `${slug}.mdx`);

  try {
    const source = await fs.readFile(filePath, "utf8");
    const { content, frontmatter } = await compileMDX<{ title?: string }>({
      source,
      options: { parseFrontmatter: true },
      components: { Skim },
    });

    return { content, frontmatter };
  } catch {
    return null;
  }
}
