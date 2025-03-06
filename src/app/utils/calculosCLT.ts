interface DecimoTerceiroResultado {
  primeiraParcela: number;
  segundaParcela: number;
  inss: number;
  irpf: number;
  total: number;
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
