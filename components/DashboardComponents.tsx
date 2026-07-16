"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";

// 1. Dashboard Header Component
export function DashboardHeader({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-ink/[0.06] pb-5">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink flex items-center gap-2">
          {title}
        </h1>
        <p className="text-sm text-ink-soft mt-1 leading-relaxed">{description}</p>
      </div>
      {action && <div className="shrink-0 self-start sm:self-auto">{action}</div>}
    </div>
  );
}

// 2. Metric Scorecard Card
export function MetricCard({
  title,
  value,
  icon: Icon,
  linkText,
  linkHref,
  badge,
}: {
  title: string;
  value: string | number;
  icon: React.ComponentType<any>;
  linkText?: string;
  linkHref?: string;
  badge?: { bg: string; text: string; label: string };
}) {
  return (
    <div className="bg-white rounded-3xl border border-ink/[0.06] p-5 shadow-[0_2px_12px_rgba(28,24,20,0.02)] flex flex-col justify-between group hover:border-brand/40 transition-all duration-300">
      <div>
        <div className="h-10 w-10 rounded-2xl bg-brand-soft text-brand flex items-center justify-center">
          <Icon size={18} />
        </div>
        <p className="text-xs font-bold text-ink-soft/70 uppercase tracking-wider mt-3">
          {title}
        </p>
        <h3 className="font-display text-3xl font-bold text-ink mt-1">{value}</h3>
      </div>
      {linkHref && linkText ? (
        <Link
          href={linkHref}
          className="mt-3 flex items-center gap-1.5 text-xs font-bold text-brand hover:underline"
        >
          {linkText} <ArrowRight size={12} />
        </Link>
      ) : badge ? (
        <span
          className={`inline-self-start mt-3 px-2.5 py-0.5 rounded-full border text-[10px] font-bold ${badge.bg} ${badge.text}`}
        >
          {badge.label}
        </span>
      ) : null}
    </div>
  );
}

// 3. Modular Container Panel Card
export function Panel({
  title,
  description,
  children,
  action,
  className = "",
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`bg-white rounded-3xl border border-ink/[0.06] p-6 shadow-sm ${className}`}>
      {(title || description || action) && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
          <div className="min-w-0">
            <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
            {description && <p className="text-xs text-ink-soft mt-0.5 leading-relaxed">{description}</p>}
          </div>
          {action && <div className="shrink-0 self-start sm:self-auto">{action}</div>}
        </div>
      )}
      {children}
    </div>
  );
}

// 4. SEO Complete Verification Badge
export function SEOStatusBadge({ isComplete }: { isComplete: boolean }) {
  return isComplete ? (
    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-full px-2.5 py-0.5">
      <CheckCircle2 size={12} className="text-emerald-500" />
      Complete
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-600 bg-amber-50 border border-amber-100 rounded-full px-2.5 py-0.5">
      <AlertCircle size={12} className="text-amber-500" />
      Low Info
    </span>
  );
}

// 5. Input Field with Character Counters & SEO Warnings
export function CharacterCounterInput({
  label,
  value,
  onChange,
  placeholder,
  min,
  max,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  min: number;
  max: number;
  type?: "text" | "textarea";
}) {
  const isOptimal = value.length >= min && value.length <= max;
  const lengthColor = value.length === 0 ? "text-ink-soft/40" : isOptimal ? "text-emerald-600 font-bold" : "text-amber-600";
  const barColor = value.length === 0 ? "bg-ink/5" : isOptimal ? "bg-emerald-500" : "bg-amber-500";

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="text-[11px] font-bold uppercase tracking-wider text-ink/75">
          {label}
        </label>
        <span className={`text-[10px] font-mono ${lengthColor}`}>
          {value.length} / {max} chars
        </span>
      </div>
      {type === "textarea" ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={3}
          className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:outline-none focus:border-brand bg-cream/20 text-xs text-ink placeholder:text-ink-soft/40 resize-none leading-relaxed"
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:outline-none focus:border-brand bg-cream/20 text-xs text-ink placeholder:text-ink-soft/40"
        />
      )}
      <div className="h-1 w-full bg-ink/5 rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-300 ${barColor}`}
          style={{ width: `${Math.min((value.length / max) * 100, 100)}%` }}
        />
      </div>
    </div>
  );
}
