interface UsersIconProps {
  className?: string;
}

export function UsersIcon({ className }: UsersIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <circle
        cx="7.99878"
        cy="8.50854"
        r="3.49145"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="17.0025"
        cy="9.49897"
        r="2.50104"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.99609 20.0033V18.9859C1.99609 16.785 3.77984 15.0012 5.98075 15.0012H10.0164C12.2174 15.0012 14.0011 16.785 14.0011 18.9859V20.0033"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.0024 15.0012H18.1049C20.3058 15.0012 22.0896 16.785 22.0896 18.9859V20.0033"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
