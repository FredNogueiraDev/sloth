import { ComponentProps } from "react";

interface InputProps extends ComponentProps<'input'> {
  id: string
  title: string
}

export function Input ({id, title, ...props }: InputProps) {
  return (
    <>
      <label className="font-medium text-green-light" htmlFor={id}>{title}</label>
      <input
      {...props}
      id={id}
      className="w-full rounded-lg border border-black-300 px-3 h-[52px]
      placeholder:text-black-300 font-medium text-green-darker hover:border-green-normalActive
      focus:outline focus:-outline-offset-2 outline:border-green-normalActive mb-4"
      />
    </>
  )
}
