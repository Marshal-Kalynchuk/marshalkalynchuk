import clsx from "clsx";

export function Memloop({ className }: { className?: string }) {
  return (
    <>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={clsx("fill-none stroke-current", className)}>
        <circle cx="11.5" cy="11.5" r="9" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="13.5" cy="13.5" r="9" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
}
