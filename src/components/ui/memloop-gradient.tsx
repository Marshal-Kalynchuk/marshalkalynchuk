import clsx from "clsx";

export function MemloopGradient({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={clsx(className)}>
        <defs>
            <linearGradient id="memloop-gradient" x1="0" y1="0.5" x2="1" y2="0.5">
                <stop offset="0%" stopColor="var(--color-memloop-purple)" />
                <stop offset="50%" stopColor="var(--color-memloop-red)" />
                <stop offset="100%" stopColor="var(--color-memloop-orange)" />
            </linearGradient>
        </defs>
        <circle cx="11.5" cy="11.5" r="9" stroke="url(#memloop-gradient)" strokeWidth="1.5" />
        <circle cx="13.5" cy="13.5" r="9" stroke="url(#memloop-gradient)" strokeWidth="1.5" />
    </svg>
  );
} 