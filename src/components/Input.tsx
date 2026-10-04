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
    const inputId = id || name || `input-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="w-full">
        <input
          ref={ref}
          id={inputId}
          name={name}
          type={type}
          aria-label={label || props.placeholder}
          placeholder={props.placeholder || label}
          className={[
            "w-full px-4 py-3 border border-gray-300 rounded-md",
            "text-gray-900 placeholder-gray-500",
            "focus:outline-none focus:ring-1 focus:ring-purple-350 focus:border-purple-350",
            hasError
              ? "border-red-400 focus:border-red-400 focus:ring-red-400"
              : "",
            className,
          ].filter(Boolean).join(" ")}
          {...props}
        />
        {hint && !hasError && (
          <p className="mt-1 text-xs text-gray-500">{hint}</p>
        )}
        {hasError && <p className="mt-1 text-xs text-red-400">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
