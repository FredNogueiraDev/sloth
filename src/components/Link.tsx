import { ComponentProps } from "react";

interface LinkProps extends ComponentProps<'a'> {
  title: string;
}

export function Link({title, children, ...props}: LinkProps) {
  return (
    <a
    className="inline-flex items-center justify-center p-5 text-base font-medium text-green-darker rounded-lg bg-green-light hover:text-gray-900 hover:bg-green-lightHover"
    {...props}
    >
        <p className="w-full">{title}</p>
        <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    </a>
  )
}
