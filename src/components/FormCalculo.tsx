import { Spinner } from "./Spinner";

interface FormCalculoProps {
  isLoading?: boolean
  title: string
  children: React.ReactNode
}

export function FormCalculo({isLoading, title, children}: FormCalculoProps) {
  return (
    <div
    className="bg-green-darker m-auto w-4/5 max-w-[500px] min-w-[300px] p-2 rounded-md text-green-light"
    >
    {!isLoading && (
      <div>
        <span className="font-bold text-lg">{title}</span>
        <div className="mt-6">
          {children}
        </div>
      </div>
      )}
    {isLoading && <Spinner className="h-6 w-6 mx-auto my-0 text-black-300 animate-spin fill-green-light" />    }
    </div>
  )
}
