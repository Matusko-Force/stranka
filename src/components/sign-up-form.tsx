"use client";

import { FormEvent, useState } from "react";

type FormErrors = {
  name?: string;
  company?: string;
  email?: string;
};

type StatusState = {
  message: string;
  tone: "idle" | "pending" | "success" | "error";
};

const initialForm = { name: "", company: "", email: "" };

const statusToneStyles: Record<StatusState["tone"], string> = {
  idle: "text-slate-500",
  pending: "text-slate-500",
  success: "text-emerald-600",
  error: "text-rose-600",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SignUpForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<StatusState>({
    message: "",
    tone: "idle",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newErrors: FormErrors = {};
    if (!form.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!form.company.trim()) {
      newErrors.company = "Company is required.";
    }
    if (!form.email) {
      newErrors.email = "Email is required.";
    } else if (!emailPattern.test(form.email)) {
      newErrors.email = "Add a valid email address.";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setStatus({ message: "", tone: "idle" });
      return;
    }

    setIsSubmitting(true);
    setStatus({ message: "Sending your info...", tone: "pending" });

    try {
      const response = await fetch("/api/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = (await response.json().catch(() => null)) as
        | { success?: boolean; error?: string }
        | null;

      if (!response.ok || !result?.success) {
        const message =
          result?.error ??
          "Unable to send your info right now. Please try again in a moment.";
        setStatus({ message, tone: "error" });
        return;
      }

      setStatus({
        message:
          "Thanks for your interest! We will reach out with next-cohort details soon.",
        tone: "success",
      });
      setForm(initialForm);
      setErrors({});
    } catch {
      setStatus({
        message:
          "Unable to send your info right now. Please check your connection and try again.",
        tone: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const statusToneClass = statusToneStyles[status.tone];

  return (
    <div>
      <form
        className="rounded-3xl border border-slate-100 bg-transparent p-8 text-slate-900 shadow-[0_24px_70px_rgba(15,23,42,0.08)]"
        onSubmit={handleSubmit}
        noValidate
        aria-label="Sign-up form"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
          Member sign up
        </p>
        <h3 className="mt-2 text-2xl font-semibold">
          Sign up to secure your seat
        </h3>
        <div className="mt-6 space-y-4">
          <label className="block text-sm font-medium text-slate-700">
            Full name
            <input
              type="text"
              name="name"
              value={form.name}
              required
              onChange={(event) =>
                setForm((prev) => ({ ...prev, name: event.target.value }))
              }
              aria-invalid={Boolean(errors.name)}
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-base text-slate-900 outline-none ring-[#ffb199] focus:border-[#ff5c35] focus:ring-2"
              placeholder="Jane Doe"
            />
            {errors.name && (
              <span className="mt-1 block text-sm text-rose-600">
                {errors.name}
              </span>
            )}
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Company
            <input
              type="text"
              name="company"
              value={form.company}
              required
              onChange={(event) =>
                setForm((prev) => ({ ...prev, company: event.target.value }))
              }
              aria-invalid={Boolean(errors.company)}
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-base text-slate-900 outline-none ring-[#ffb199] focus:border-[#ff5c35] focus:ring-2"
              placeholder="0100 Ventures"
            />
            {errors.company && (
              <span className="mt-1 block text-sm text-rose-600">
                {errors.company}
              </span>
            )}
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              required
              onChange={(event) =>
                setForm((prev) => ({ ...prev, email: event.target.value }))
              }
              aria-invalid={Boolean(errors.email)}
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-base text-slate-900 outline-none ring-[#ffb199] focus:border-[#ff5c35] focus:ring-2"
              placeholder="you@email.com"
            />
            {errors.email && (
              <span className="mt-1 block text-sm text-rose-600">
                {errors.email}
              </span>
            )}
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-[#ff5c35] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-[#ff5c35]/30 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5c35] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Sending..." : "Save my spot"}
        </button>
        <p
          role="status"
          aria-live="polite"
          className={`mt-3 min-h-[1.25rem] text-sm font-medium ${statusToneClass}`}
        >
          {status.message}
        </p>
      </form>
    </div>
  );
}
