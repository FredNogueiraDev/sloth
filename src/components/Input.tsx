import { ComponentProps } from "react";

interface InputProps extends ComponentProps<'input'> {
  id: string
  title: string
  isCurrency?: boolean
}

export function Input ({id, title, isCurrency = true, ...props }: InputProps) {
  return (
    <div className="flex flex-col w-[48%] ">
      <label className="font-medium text-green-light" htmlFor={id}>{title}</label>

      <div className="flex max-w-[100%] items-center relative mt-1">
        {isCurrency && <span className="absolute fill-none w-6 text-green-darker font-medium left-4 mb-4">R$</span>}
        <input
        {...props}
        id={id}
        className={`rounded-lg border border-black-300 px-3 h-[48px]
          placeholder:text-black-300 font-medium text-green-darker
          hover:border-green-normalActive focus:outline focus:-outline-offset-2
          outline:border-green-normalActive mb-4 max-w-full ${isCurrency ? 'pl-12' : ''}`}
        />
      </div>

    </div>
  )
}
