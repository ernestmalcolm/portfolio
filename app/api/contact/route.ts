import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Some of the form details were missing or invalid." }, { status: 400 });
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      // Set WEB3FORMS_ACCESS_KEY in Vercel. Free key at https://web3forms.com
      return NextResponse.json(
        { error: "The contact form isn't switched on yet." },
        { status: 503 },
      );
    }

    const { name, email, message } = parsed.data;

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        message,
        subject: `Portfolio contact from ${name}`,
        from_name: "Ernest Mwinchumu Portfolio",
        replyto: email,
      }),
    });

    const data = (await res.json()) as { success: boolean; message?: string };

    if (!data.success) {
      return NextResponse.json(
        { error: "Your message didn't send. Try again in a minute." },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Your message didn't send." }, { status: 500 });
  }
}
