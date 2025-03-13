import { ComponentProps } from "react";
import { Spinner } from "./Spinner";

interface ButtonProps extends ComponentProps<'button'> {
  isLoading?: boolean;
}

export function Button({isLoading, disabled, children, ...props}: ButtonProps) {
  return (
    <button
    disabled={isLoading || disabled}
    className="w-full text-green-darker rounded-lg bg-green-light hover:text-gray-900 px-3 h-[52px] font-medium focus-visible:outline-none hover:bg-green-lightHover disabled:text-green-lightActive"
    {...props}
    >
    {!isLoading && children}
    {isLoading && <Spinner className="h-6 w-6 mx-auto my-0 text-black-300 animate-spin fill-green-normal" />}
    </button>
  )
}
