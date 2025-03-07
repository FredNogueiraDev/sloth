import { ComponentProps } from "react";

interface InputProps extends ComponentProps<'input'> {
  id: string
  title: string
}

export function Input ({id, title, ...props }: InputProps) {
  return (
    <div className="flex flex-col w-[48%]">
      <label className="font-medium text-green-light" htmlFor={id}>{title}</label>
      <input
      {...props}
      id={id}
      className="rounded-lg border border-black-300 px-3 h-[48px]
      placeholder:text-black-300 font-medium text-green-darker hover:border-green-normalActive
      focus:outline focus:-outline-offset-2 outline:border-green-normalActive mb-4"
      />
    </div>
  )
}
