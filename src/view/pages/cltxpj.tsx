import { useState } from "react";
import { Header } from "../../components/Header";
import { FormCalculo } from "../../components/FormCalculo";
import { Input } from "../../components/Input";
import { calcularSalarioLiquidoEfetivo } from "../../app/utils/calculosCLT";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { validateError, validateAmount } from "../../app/utils/formValidations";

interface CltxPj {
  salarioBruto: number;
  valeTransporte: number;
  valeRefeicao: number;
  outrosBeneficios: number;
  vrFeriasMensal: number;
  vrDecimoTerceiroMensal: number;
  vrFgts: number;
  inssTotal: number;
  irpfTotal: number;
  descValeTransporte: number;
  salarioLiquidoEfetivo: number;
}

export function CltxPj() {
  const [salarioBruto, setSalarioBruto] = useState("0,00");
  const [valeRefeicao, setValeRefeicao] = useState("0,00");
  const [valeTransporte, setValeTransporte] = useState("0,00");
  const [outrosBeneficios, setOutrosBeneficios] = useState("0,00");
  const [resultado, setResultado] = useState<CltxPj | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const salario = parseFloat(salarioBruto);
    const VR = parseFloat(valeRefeicao);
    const VT = parseFloat(valeTransporte);
    const outros = parseFloat(outrosBeneficios);

    const salarioValido = validateAmount(salario, 'Salário Bruto');
    const VRValido = validateAmount(VR, 'Vale Refeição');
    const VTValido = validateAmount(VT, 'Vale Transporte');
    const outrosValido = validateAmount(outros, 'Outros Benefícios');

    if (validateError(salarioValido) || validateError(VRValido) || validateError(VTValido) || validateError(outrosValido)) {
      return;
    }

    const calculo = calcularSalarioLiquidoEfetivo(salario, VR, VT, outros);
    setResultado(calculo);
  };

  return (
    <div className="text-white-900 w-full h-screen flex justify-center items-center flex-col">
      <main className="w-full h-full flex flex-col bg-gray-0 overflow-y-auto">
      <Header/>
      <FormCalculo title="Comparador de CLT x PJ">
        <form onSubmit={handleSubmit} className="flex flex-wrap gap-2 justify-center">
          <Input
            id="salarioBruto"
            title="Salário Bruto"
            value={salarioBruto}
            onChange={(e) => setSalarioBruto((e.target.value))}
            type="number"
            step="0.01"
            placeholder="R$ 0,00"
          />
          <Input
            id="valeRefeicao"
            title="Vale Refeição"
            value={valeRefeicao}
            onChange={(e) => setValeRefeicao((e.target.value))}
            type="number"
            step="0.01"
            placeholder="R$ 0,00"
          />
          <Input
            id="valeTransporte"
            title="Vale Transporte"
            value={valeTransporte}
            onChange={(e) => setValeTransporte((e.target.value))}
            type="number"
            step="0.01"
            placeholder="R$ 0,00"
          />
          <Input
            id="outrosBeneficios"
            title="Outros Benefícios"
            value={outrosBeneficios}
            onChange={(e) => setOutrosBeneficios((e.target.value))}
            type="number"
            step="0.01"
            placeholder="R$ 0,00"
          />
          <Button type="submit">Calcular</Button>
        </form>

        {resultado && (
          <div className="mt-6 relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full">
              <tbody>
                  <tr className="border-b border-gray-700">
                      <td className="w-6/12 px-6 py-2 font-medium text-white bg-gray-800">
                        (+) Salário Bruto
                      </td>
                      <td className="px-6 py-2 bg-gray-600 font-medium text-white text-center">
                        R$ {resultado.salarioBruto.toFixed(2)}
                      </td>
                  </tr>
                  <tr className="border-b border-gray-700">
                      <td className="w-6/12 px-6 py-2 font-medium text-white bg-gray-800">
                        (+) Vale Transporte
                      </td>
                      <td className="px-6 py-2 bg-gray-600 font-medium text-white text-center">
                        R$ {resultado.valeTransporte.toFixed(2)}
                      </td>
                  </tr>
                  <tr className="border-b border-gray-700">
                      <td className="w-6/12 px-6 py-2 font-medium text-white bg-gray-800">
                        (+) Vale Refeição
                      </td>
                      <td className="px-6 py-2 bg-gray-600 font-medium text-white text-center">
                        R$ {resultado.valeRefeicao.toFixed(2)}
                      </td>
                  </tr>
                  <tr className="border-b border-gray-700">
                      <td className="w-6/12 px-6 py-2 font-medium text-white bg-gray-800">
                        (+) Outros Benefícios
                      </td>
                      <td className="px-6 py-2 bg-gray-600 font-medium text-white text-center">
                        R$ {resultado.outrosBeneficios.toFixed(2)}
                      </td>
                  </tr>
                  <tr className="border-b border-gray-700">
                      <td className="w-6/12 px-6 py-2 font-medium text-white bg-gray-800">
                        (+) Vr. Férias Mensal
                      </td>
                      <td className="px-6 py-2 bg-gray-600 font-medium text-white text-center">
                        R$ {resultado.vrFeriasMensal.toFixed(2)}
                      </td>
                  </tr>
                  <tr className="border-b border-gray-700">
                      <td className="w-6/12 px-6 py-2 font-medium text-white bg-gray-800">
                        (+) Vr. Décimo Terceiro Mensal
                      </td>
                      <td className="px-6 py-2 bg-gray-600 font-medium text-white text-center">
                        R$ {resultado.vrDecimoTerceiroMensal.toFixed(2)}
                      </td>
                  </tr>
                  <tr className="border-b border-gray-700">
                      <td className="w-6/12 px-6 py-2 font-medium text-white bg-gray-800">
                        (+) Vr. FGTS
                      </td>
                      <td className="px-6 py-2 bg-gray-600 font-medium text-white text-center">
                        R$ {resultado.vrFgts.toFixed(2)}
                      </td>
                  </tr>
                  <tr className="border-b border-gray-700">
                      <td className="w-6/12 px-6 py-2 font-medium text-white bg-gray-800">
                        (-) INSS
                      </td>
                      <td className="px-6 py-2 bg-gray-600 font-medium text-white text-center">
                        R$ {resultado.inssTotal.toFixed(2)}
                      </td>
                  </tr>
                  <tr className="border-b border-gray-700">
                      <td className="w-6/12 px-6 py-2 font-medium text-white bg-gray-800">
                        (-) IRPF
                      </td>
                      <td className="px-6 py-2 bg-gray-600 font-medium text-white text-center">
                        R$ {resultado.irpfTotal.toFixed(2)}
                      </td>
                  </tr>
                  <tr className="border-b border-gray-700">
                      <td className="w-6/12 px-6 py-2 font-medium text-white bg-gray-800">
                        (-) Desc. Vale Transporte
                      </td>
                      <td className="px-6 py-2 bg-gray-600 font-medium text-white text-center">
                        R$ {resultado.descValeTransporte.toFixed(2)}
                      </td>
                  </tr>
                  <tr className="border-b border-gray-700">
                      <td className="w-6/12 px-6 py-2 font-medium text-white bg-gray-800">
                        (=) Salário Líquido Efetivo
                      </td>
                      <td className="px-6 py-2 bg-gray-600 font-medium text-white text-center">
                        R$ {resultado.salarioLiquidoEfetivo.toFixed(2)}
                      </td>
                  </tr>
                </tbody>
            </table>
          </div>
          )}

      </FormCalculo>

      <Footer/>
      </main>
    </div>
  );
}
