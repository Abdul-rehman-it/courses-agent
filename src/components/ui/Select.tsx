"use client";

import { cn } from "@/lib/cn";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Check, ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

export type SelectOption = {
  value: string;
  label: string;
  hint?: string;
};

type SelectProps = {
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
};

export function Select({
  name,
  value,
  onChange,
  options,
  placeholder = "Select",
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonId = useId();
  const listId = useId();
  const selected = options.find((option) => option.value === value);

  useEffect(() => {
    function onPointer(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={rootRef} className="relative">
      <input type="hidden" name={name} value={value} />
      <button
        id={buttonId}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        className={cn(
          "flex h-12 w-full cursor-pointer items-center gap-3 rounded-[12px] border bg-surface px-3.5 text-left text-base text-ink outline-none transition-colors sm:text-[0.95rem]",
          open ? "border-teal" : "border-line hover:border-line-strong focus:border-teal",
        )}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="min-w-0 flex-1">
          {selected ? (
            <span className="flex items-baseline justify-between gap-3">
              <span className="truncate">{selected.label}</span>
              {selected.hint ? (
                <span className="hidden shrink-0 text-xs text-muted sm:inline">
                  {selected.hint}
                </span>
              ) : null}
            </span>
          ) : (
            <span className="text-muted">{placeholder}</span>
          )}
        </span>
        <ChevronDown
          size={18}
          strokeWidth={1.75}
          className={cn(
            "shrink-0 text-muted-2 transition-transform duration-200",
            open && "rotate-180 text-teal",
          )}
          aria-hidden
        />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.ul
            id={listId}
            role="listbox"
            aria-labelledby={buttonId}
            initial={reduce ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 1 } : { opacity: 0, y: 6 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute z-40 mt-2 max-h-64 w-full max-w-full overflow-auto rounded-[14px] border border-line bg-surface p-1.5 shadow-[var(--shadow-lift)]"
          >
            {options.map((option) => {
              const active = option.value === value;
              return (
                <li key={option.value || "any"}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={active}
                    className={cn(
                      "flex w-full cursor-pointer items-center gap-3 rounded-[10px] px-3 py-2.5 text-left transition-colors",
                      active ? "bg-teal-soft text-teal-ink" : "text-ink hover:bg-paper",
                    )}
                    onClick={() => {
                      onChange(option.value);
                      setOpen(false);
                    }}
                  >
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-base font-medium sm:text-[0.95rem]">
                        {option.label}
                      </span>
                      {option.hint ? (
                        <span className="mt-0.5 block text-xs text-muted">
                          {option.hint}
                        </span>
                      ) : null}
                    </span>
                    {active ? (
                      <Check
                        size={16}
                        strokeWidth={2}
                        className="shrink-0 text-teal"
                        aria-hidden
                      />
                    ) : null}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
