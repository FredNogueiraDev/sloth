interface DecimoTerceiroResultado {
  primeiraParcela: number;
  segundaParcela: number;
  inss: number;
  irpf: number;
  total: number;
}

interface SalarioLiquidoEfetivoResultado {
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

export const calcularDecimoTerceiro = (salarioBruto: number, nMesesTrabalhados: number): DecimoTerceiroResultado => {
  let salarioAnual = (salarioBruto * nMesesTrabalhados) / 12

  let inss = calculadoraINSS(salarioAnual);
  let baseIrpf = (salarioAnual - inss)
  let irpf = calculadoraIRPF(baseIrpf);
  let descontos = (inss + irpf)

  let primeiraParcela = (salarioAnual / 2)
  let segundaParcela = (primeiraParcela - descontos)

  let total = (primeiraParcela + segundaParcela)

  return {primeiraParcela, segundaParcela, inss, irpf, total}
}

export const calcularSalarioLiquidoEfetivo = (salarioBruto: number, valeRefeicao: number, valeTransporte: number, outrosBeneficios: number ): SalarioLiquidoEfetivoResultado => {
  const inssBase = calculadoraINSS(salarioBruto);
  const irpfBase = calculadoraIRPF(salarioBruto - inssBase);

  const vrFerias = calculadoraFerias(salarioBruto, 30, false);
  const inssFerias = calculadoraINSS(vrFerias);
  const irpfFerias = calculadoraIRPF(vrFerias - inssFerias);
  const vrFeriasMensal = vrFerias / 12;

  const {primeiraParcela: vrDecimoTerceiro, inss: inssDecimoTerceiro, irpf: irpfDecimoTerceiro } = calcularDecimoTerceiro(salarioBruto, 12);
  const vrDecimoTerceiroMensal = vrDecimoTerceiro / 6;

  const vrFgts = calculadoraFgts(salarioBruto);
  const descValeTransporte = Math.min(salarioBruto * 0.06, valeTransporte)

  const receitas = (salarioBruto + vrFeriasMensal + vrDecimoTerceiroMensal + vrFgts + outrosBeneficios + valeTransporte + valeRefeicao)

  const inssTotal = inssBase + ((inssFerias + inssDecimoTerceiro) / 12)
  const irpfTotal = irpfBase + ((irpfFerias + irpfDecimoTerceiro) / 12)
  const despesas = descValeTransporte + inssTotal + irpfTotal

  const salarioLiquidoEfetivo = receitas - despesas

  return {salarioBruto, valeTransporte, valeRefeicao, outrosBeneficios, vrFeriasMensal, vrDecimoTerceiroMensal, vrFgts, inssTotal, irpfTotal, descValeTransporte, salarioLiquidoEfetivo}
}


export const calculadoraINSS = (baseINSS: number): number => {
  const tetoInss = 908.85;
  const faixasInss: [number, number][] = [
    [1412.00, 0.075],
    [2666.68, 0.09],
    [4000.03, 0.12],
    [Infinity, 0.14],
  ];

  let inss = 0;
  let valorRestante = baseINSS;

  for (let i = 0; i < faixasInss.length; i++) {
    const [limite, aliquota] = faixasInss[i];
    if (valorRestante <= 0) break;

    const faixaAnterior = i > 0 ? faixasInss[i - 1][0] : 0;
    const baseCalculo = Math.min(valorRestante, limite - faixaAnterior);
    inss += baseCalculo * aliquota;
    valorRestante -= baseCalculo;
  }

  return Math.min(inss, tetoInss);
};

export const calculadoraIRPF = (baseIRPF: number): number => {
  const faixasIrpf: [number, number, number][] = [
    [2259.20, 0, 0],
    [2826.65, 0.075, 158.40],
    [3751.05, 0.15, 381.44],
    [4664.68, 0.225, 662.77],
    [Infinity, 0.275, 896],
  ];

  let irpf = 0;
  for (const [limite, aliquota, deducao] of faixasIrpf) {
    if (baseIRPF <= limite) {
      irpf = baseIRPF * aliquota - deducao;
      break;
    }
  }

  return irpf < 0 ? 0 : irpf;
};

export const calculadoraFerias = (salarioBruto: number, diasFerias: number, abateDescontos: boolean): number => {
  const valorDiario = salarioBruto / 30;
  const feriasBase = valorDiario * diasFerias
  const adicionalUmTerco = feriasBase / 3
  const totalFeriasBruto = feriasBase + adicionalUmTerco

  const inss = calculadoraINSS(totalFeriasBruto);
  const irpf = calculadoraIRPF(totalFeriasBruto - inss)

  const totalLiquido = totalFeriasBruto - inss - irpf

  return abateDescontos == true ? totalLiquido : totalFeriasBruto;
}

const calculadoraFgts= (salarioBruto: number): number => {
  const total = salarioBruto * 0.08
  return total;
}
