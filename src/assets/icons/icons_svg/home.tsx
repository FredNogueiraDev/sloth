interface HomeIconProps {
  className?: string;
}

export function HomeIcon({ className }: HomeIconProps) {
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
    fillRule="evenodd"
    clipRule="evenodd"
    d="M19.5282 7.98627L13.7682 3.50595C12.7285 2.69667 11.2722 2.69667 10.2315 3.50595L4.47154 7.98627C3.76978 8.53251 3.35986 9.37155 3.35986 10.2595V17.2992C3.35986 18.8899 4.64914 20.1792 6.23986 20.1792H17.7599C19.3506 20.1792 20.6399 18.8899 20.6399 17.2992V10.2595C20.6399 9.37155 20.2299 8.53251 19.5282 7.98627Z"
    stroke="currentColor"
    strokeWidth="1.5"/>
    </svg>
  );
}
