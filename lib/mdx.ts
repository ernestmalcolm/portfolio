import fs from "node:fs/promises";
import path from "node:path";

import { compileMDX } from "next-mdx-remote/rsc";

const writingDirectory = path.join(process.cwd(), "content/writing");

export async function getMdxContent(slug: string) {
  const filePath = path.join(writingDirectory, `${slug}.mdx`);

  try {
    const source = await fs.readFile(filePath, "utf8");
    const { content, frontmatter } = await compileMDX<{ title?: string }>({
      source,
      options: { parseFrontmatter: true },
    });

    return { content, frontmatter };
  } catch {
    return null;
  }
}
