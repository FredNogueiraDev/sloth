import ErrorImg from "../../assets/images/Error.jpg"

export function NotFound() {
  return (
    <div className="flex gap-8 w-full max-w-[800px] h-full items-center	justify-center my-0 mx-auto">
      <img className="w-[350px]" src={ErrorImg} alt="404 - Não encontrado" />
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-[24px] text-green-darker">Ops! Página não encontrada. </h1>
        <span className="font-light">Parece que você tentou acessar uma página que não existe ou foi movida para outro lugar.</span>
        <div>
          <span className="font-light">O que você pode fazer agora?</span>
          <ul className="list-disc ml-5 font-light">
            <li>Verifique se o endereço digitado está correto.</li>
            <li>Retorne à <a className="text-green-darker" href="/">página inicial.</a></li>
          </ul>
        </div>
        <span className="font-light">Se você acredita que isso é um erro, entre em contato com o suporte. Estamos aqui para ajudar!</span>
      </div>
    </div>
  )
}
