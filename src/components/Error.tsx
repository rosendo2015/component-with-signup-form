export interface AlertProps {
  message: string;
  type?: "error" | "warning" | "success" | "info";
  className?: string;
}

export function Alert({ message, type = "error", className = "" }: AlertProps) {
  const styles = {
    error: "bg-red-400 bg-opacity-10 border border-red-400 text-red-400",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-600",
    success: "bg-green-400 bg-opacity-10 border border-green-400 text-green-400",
    info: "bg-purple-700 bg-opacity-10 border border-purple-700 text-purple-700",
  };

  const iconStyles = {
    error: "text-red-400",
    warning: "text-yellow-500",
    success: "text-green-400",
    info: "text-purple-700",
  };

  const icons = {
    error: (
      <svg
        className={`w-4 h-4 ${iconStyles[type]}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        role="img"
      >
        <title>Error icon</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    warning: (
      <svg
        className={`w-4 h-4 ${iconStyles[type]}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        role="img"
      >
        <title>Warning icon</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    ),
    success: (
      <svg
        className={`w-4 h-4 ${iconStyles[type]}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        role="img"
      >
        <title>Success icon</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
    info: (
      <svg
        className={`w-4 h-4 ${iconStyles[type]}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        role="img"
      >
        <title>Info icon</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  };

  return (
    <div
      className={`flex items-center gap-2 p-3 rounded-lg border ${styles[type]} ${className}`}
      role="alert"
    >
      {icons[type]}
      <span className="text-sm">{message}</span>
    </div>
  );
}
