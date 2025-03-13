import { Header } from "../../../components/Header";
import { Link } from "../../../components/Link";

export function Dashboard() {
  return (
    <div className="text-white-900 w-full h-full flex justify-center items-center">
      <main className="w-full h-full flex flex-col bg-gray-0">
        <Header/>
        <div className="bg-white m-auto w-4/5 max-w-[500px] min-w-[300px] p-2 rounded-md text-green-darker flex flex-col gap-2">
          <span className="font-bold text-lg">Cálculos disponíveis</span>
          <Link title="Calculadora CLT x PJ" href="/cltxpj"></Link>
          <Link title="Calculadora de 13°" href="/decimoterceiro"></Link>
        </div>
      </main>
    </div>
  );
}
