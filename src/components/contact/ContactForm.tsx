"use client";

import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";
import { courses } from "@/lib/content";
import { whatsappHref } from "@/lib/site";
import { FormEvent, useMemo, useState } from "react";

const fieldClass =
  "h-12 cursor-text rounded-[12px] border border-line bg-surface px-3.5 text-[0.95rem] text-ink outline-none transition-colors hover:border-line-strong focus:border-teal";

type ContactFormProps = {
  defaultCourse?: string;
};

export function ContactForm({ defaultCourse = "" }: ContactFormProps) {
  const [course, setCourse] = useState(defaultCourse);
  const [sent, setSent] = useState(false);

  const selectedTitle = useMemo(
    () => courses.find((item) => item.id === course)?.title,
    [course],
  );

  const courseOptions = [
    { value: "", label: "Any course", hint: "I’ll help you choose" },
    ...courses.map((item) => ({
      value: item.id,
      label: item.title,
      hint: item.priceLabel,
    })),
  ];

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const body = [
      `Hi, I want to enquire about Lumina.`,
      `Name: ${name}`,
      `Course: ${selectedTitle || "Not selected"}`,
      "",
      message,
    ].join("\n");

    window.open(whatsappHref(body), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <label className="grid gap-1.5 text-sm">
        <span className="font-medium text-ink">Name</span>
        <input name="name" required autoComplete="name" className={fieldClass} />
      </label>
      <div className="grid gap-1.5 text-sm">
        <span className="font-medium text-ink">Course</span>
        <Select
          name="course"
          value={course}
          onChange={setCourse}
          options={courseOptions}
          placeholder="Select a course"
        />
      </div>
      <label className="grid gap-1.5 text-sm">
        <span className="font-medium text-ink">Message</span>
        <textarea
          name="message"
          required
          rows={4}
          className="min-h-[120px] cursor-text resize-y rounded-[12px] border border-line bg-surface px-3.5 py-3 text-[0.95rem] text-ink outline-none transition-colors hover:border-line-strong focus:border-teal"
          placeholder="Tell me which course you want, and I’ll get back to you."
        />
      </label>
      <Button type="submit" className="mt-1 w-full sm:w-auto">
        Send message
      </Button>
      {sent ? (
        <p className="text-sm text-muted">
          WhatsApp should open with your message. If it doesn’t, tap{" "}
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-teal"
          >
            here
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
