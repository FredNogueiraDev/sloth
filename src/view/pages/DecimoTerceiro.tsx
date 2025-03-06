import { useState } from "react";
import { Header } from "../../components/Header";
import { FormCalculo } from "../../components/FormCalculo";
import { Input } from "../../components/Input";
import { calcularDecimoTerceiro } from "../../app/utils/calculosCLT";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

interface DecimoTerceiroResultado {
  primeiraParcela: number;
  segundaParcela: number;
  inss: number;
  irpf: number;
  total: number;
}

export function DecimoTerceiro() {
  const [salarioBruto, setSalarioBruto] = useState("");
  const [nMesesTrabalhados, setNMesesTrabalhados] = useState("");
  const [resultado, setResultado] = useState<DecimoTerceiroResultado | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const salario = parseFloat(salarioBruto);
    const meses = parseInt(nMesesTrabalhados);

    // AJUSTAR VALIDAÇÕES
    if (isNaN(salario) || isNaN(meses) || salario <= 0 || meses < 1 || meses > 12) {
      alert("Por favor, insira valores válidos: Salário > 0 e Meses entre 1 e 12.");
      return;
    }

    const calculo = calcularDecimoTerceiro(salario, meses);
    setResultado(calculo);
  };

  return (
    <div className="text-white-900 w-full h-screen flex justify-center items-center flex-col">
      <main className="w-full h-full flex flex-col bg-gray-0 overflow-y-auto">
      <Header/>
      <FormCalculo title="Cálculo de 13° Salário">
        <form onSubmit={handleSubmit}>
          <Input
            id="salarioBruto"
            title="Salário Bruto"
            value={salarioBruto}
            onChange={(e) => setSalarioBruto(e.target.value)}
            type="number"
            step="0.01"
            placeholder="Digite o salário bruto"
          />
          <Input
            id="nMesesTrabalhados"
            title="N° Meses Trabalhados"
            value={nMesesTrabalhados}
            onChange={(e) => setNMesesTrabalhados(e.target.value)}
            type="number"
            placeholder="Digite os meses trabalhados"
          />
          <Button type="submit">Calcular</Button>
        </form>

        {resultado && (
          <div className="mt-6 relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full">
              <tbody>
                  <tr className="border-b border-gray-700">
                      <td className="w-6/12 px-6 py-2 font-medium text-white bg-gray-800">
                        (+) Primeira Parcela
                      </td>
                      <td className="px-6 py-2 bg-gray-600 font-medium text-white text-center">
                        R$ {resultado.primeiraParcela.toFixed(2)}
                      </td>
                  </tr>
                  <tr className="border-b border-gray-700">
                      <td className="w-6/12 px-6 py-2 font-medium text-white bg-gray-800">
                        (+) Segunda Parcela
                      </td>
                      <td className="px-6 py-2 bg-gray-600 font-medium text-white text-center">
                        R$ {resultado.segundaParcela.toFixed(2)}
                      </td>
                  </tr>
                  <tr className="border-b border-gray-700">
                      <td className="w-6/12 px-6 py-2 font-medium text-white bg-gray-800">
                        (-) INSS
                      </td>
                      <td className="px-6 py-2 bg-gray-600 font-medium text-white text-center">
                        R$ {resultado.inss.toFixed(2)}
                      </td>
                  </tr>
                  <tr className="border-b border-gray-700">
                      <td className="w-6/12 px-6 py-2 font-medium text-white bg-gray-800">
                        (-) IRPF
                      </td>
                      <td className="px-6 py-2 bg-gray-600 font-medium text-white text-center">
                        R$ {resultado.irpf.toFixed(2)}
                      </td>
                  </tr>
                  <tr className="border-b border-gray-700">
                      <td className="w-6/12 px-6 py-2 font-medium text-white bg-gray-800">
                        (+) Total Líquido
                      </td>
                      <td className="px-6 py-2 bg-gray-600 font-medium text-white text-center">
                        R$ {resultado.total.toFixed(2)}
                      </td>
                  </tr>
                </tbody>
            </table>
          </div>
          )}

      </FormCalculo>

      <Footer></Footer>
      </main>
    </div>
  );
}
