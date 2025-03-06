interface LogoffIconProps {
  className?: string;
}

export function LogoffIcon({ className }: LogoffIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
    <path
      d="M17.657 6.34302C20.781 9.46702 20.781 14.533 17.657 17.657C14.533 20.781 9.467 20.781 6.343 17.657C3.219 14.533 3.219 9.46702 6.343 6.34302M12 4V12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"/>
    </svg>
  );
}
