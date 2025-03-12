import { useState } from "react";
import { Header } from "../../components/Header";
import { FormCalculo } from "../../components/FormCalculo";
import { Input } from "../../components/Input";
import { calcularDecimoTerceiro } from "../../app/utils/calculosCLT";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { validateMonth, validateError, validateAmount} from "../../app/utils/formValidations";
import { handleChange } from "../../app/utils/formataMoeda";
import { parseCurrency } from "../../app/utils/parseCurrency";

interface DecimoTerceiroResultado {
  primeiraParcela: number;
  segundaParcela: number;
  inss: number;
  irpf: number;
  total: number;
}

export function DecimoTerceiro() {
  const [formData, setFormData] = useState({
    salarioBruto: "0,00",
    nMesesTrabalhados: "0"
  });

  const [resultado, setResultado] = useState<DecimoTerceiroResultado | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formDataNumerico = {
      salarioBruto: parseCurrency(formData.salarioBruto),
      nMesesTrabalhados: parseInt(formData.nMesesTrabalhados)
    };

    const validationResult = validateAmount(formDataNumerico.salarioBruto, "Salário Bruto");
    const validationMonth = validateMonth(formDataNumerico.nMesesTrabalhados)

    const errors = [];
    if (!validationResult.isValid) errors.push(validationResult);
    if (!validationMonth.isValid) errors.push(validationMonth);

    if (errors.length > 0) {
      errors.forEach(validateError);
      return;
    }

    const calculo = calcularDecimoTerceiro(formDataNumerico.salarioBruto, formDataNumerico.nMesesTrabalhados);
    setResultado(calculo);
  };

  return (
    <div className="text-white-900 w-full h-screen flex justify-center items-center flex-col">
      <main className="w-full h-full flex flex-col bg-gray-0 overflow-y-auto">
      <Header/>
      <FormCalculo title="Cálculo de 13° Salário">
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
            id="nMesesTrabalhados"
            title="N° Meses Trabalhados"
            name="nMesesTrabalhados"
            value={formData.nMesesTrabalhados}
            onChange={(e) => handleChange(e, setFormData, false)}
            step={1}
            type="number"
            isCurrency={false}
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
                        (=) Total Líquido
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

      <Footer/>
      </main>
    </div>
  );
}
