import { useState } from "react";
import { Header } from "../../components/Header";
import { FormCalculo } from "../../components/FormCalculo";
import { Input } from "../../components/Input";
import { calcularSalarioLiquidoEfetivo } from "../../app/utils/calculosCLT";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { validateAmounts, ValidationResult, ValidationEntry } from "../../app/utils/formValidations";
import { handleChange } from "../../app/utils/formataMoeda";
import { parseCurrency } from "../../app/utils/parseCurrency";

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

interface FormDataNumerico {
  salarioBruto: number;
  valeRefeicao: number;
  valeTransporte: number;
  outrosBeneficios: number;
}

export function CltxPj() {
  const [formData, setFormData] = useState({
    salarioBruto: "0,00",
    valeRefeicao: "0,00",
    valeTransporte: "0,00",
    outrosBeneficios: "0,00",
  });
  const [resultado, setResultado] = useState<CltxPj | null>(null);

  function validateFormDataNumerico(formData: FormDataNumerico): ValidationResult {
    const entries: ValidationEntry[] = [
      { value: formData.salarioBruto, label: 'Salário Bruto' },
      { value: formData.valeRefeicao, label: 'Vale Refeição' },
      { value: formData.valeTransporte, label: 'Vale Transporte' },
      { value: formData.outrosBeneficios, label: 'Outros Benefícios' },
    ];
    return validateAmounts(entries);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formDataNumerico = {
      salarioBruto: parseCurrency(formData.salarioBruto),
      valeRefeicao: parseCurrency(formData.valeRefeicao),
      valeTransporte: parseCurrency(formData.valeTransporte),
      outrosBeneficios: parseCurrency(formData.outrosBeneficios),
    };

    const validationResult = validateFormDataNumerico(formDataNumerico);

    if (!validationResult.isValid) {
      return;
    }

    const calculo = calcularSalarioLiquidoEfetivo(formDataNumerico.salarioBruto, formDataNumerico.valeRefeicao, formDataNumerico.valeTransporte, formDataNumerico.outrosBeneficios);
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
            name="salarioBruto"
            value={formData.salarioBruto}
            onChange={(e) => handleChange(e, setFormData)}
            type="text"
          />
          <Input
            id="valeRefeicao"
            title="Vale Refeição"
            name="valeRefeicao"
            value={formData.valeRefeicao}
            onChange={(e) => handleChange(e, setFormData)}
            type="text"
          />
          <Input
            id="valeTransporte"
            title="Vale Transporte"
            name="valeTransporte"
            value={formData.valeTransporte}
            onChange={(e) => handleChange(e, setFormData)}
            type="text"
          />
          <Input
            id="outrosBeneficios"
            title="Outros Benefícios"
            name="outrosBeneficios"
            value={formData.outrosBeneficios}
            onChange={(e) => handleChange(e, setFormData)}
            type="text"
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
