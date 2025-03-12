import { ChangeEvent } from 'react';

export const formataMoeda = (valor: string) => {
  const valorLimpo = valor.replace(/\D/g, "");
  const valorNumber = Number(valorLimpo) / 100;
  return valorNumber.toLocaleString('pt-br', {minimumFractionDigits: 2});
};

export function handleChange<T>(
  e: ChangeEvent<HTMLInputElement>,
  setFormData: React.Dispatch<React.SetStateAction<T>>,
  execFormataMoeda: boolean = true
) {
  const { name, value } = e.target;

  setFormData((prevState) => ({
    ...prevState,
    [name]: (execFormataMoeda ? formataMoeda(value) : value),
  }));
}
