import type { InputHTMLAttributes } from "react";
import { forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, className, type = "text", id, name, ...props }, ref) => {
    const hasError = Boolean(error);
    const inputId = id || name || `input-${Math.random().toString(36).slice(2, 11)}`;

    return (
      <div className="w-full">
        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            name={name}
            type={type}
            aria-label={label || props.placeholder}
            placeholder={props.placeholder || label}
            className={[
              "w-full rounded-lg border bg-white px-4 py-3 pr-12 text-base text-[#3e3c49] placeholder:text-[#b9b6c5] lg:h-[64px] lg:px-5",
              "transition-all duration-200 hover:border-[#b2aef7] focus:outline-none focus:ring-2 focus:ring-[#5d56a8]/20",
              hasError
                ? "border-[#ff7a7a] focus:border-[#ff7a7a] focus:ring-[#ff7a7a]/20"
                : "border-[#d7d7d7] hover:border-[#b2aef7] focus:border-[#5d56a8]",
              className,
            ].filter(Boolean).join(" ")}
            {...props}
          />

          {hasError && (
            <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ff7a7a] text-xs font-bold text-white">
                !
              </span>
            </span>
          )}
        </div>

        {hint && !hasError && (
          <p className="mt-1 text-xs text-gray-500">{hint}</p>
        )}
        {hasError && (
          <p className="mt-2 pr-1 text-right text-[0.7rem] italic text-[#ff7a7a]">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
