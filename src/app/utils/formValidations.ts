import toast from "react-hot-toast";

export type ValidationEntry = {
  value: number;
  label: string;
};

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export const validateError = (validacao: { isValid: boolean; error?: string }) => {
  if (!validacao.isValid) {
    toast.error(validacao.error ?? "Ocorreu um erro inesperado.");
    return true;
  }
  return false;
};

export function validateMonth(month: number): { isValid: boolean; error?: string } {
  if (!Number.isInteger(month)) {
      return { isValid: false, error: "O mês deve ser um número inteiro" };
  }
  if (month < 1 || month > 12) {
      return { isValid: false, error: "O mês deve estar entre 1 e 12" };
  }
  return { isValid: true };
}

export const validateAmounts = (entries: ValidationEntry[]): ValidationResult => {
  for (const { value, label } of entries) {
    const result = validateAmount(value, label);
    if (!result.isValid) {
      validateError(result);
      return result
    }
  }
  return { isValid: true };
}

export function validateAmount(amount: number, type: string): { isValid: boolean; error?: string } {
  if (Number.isNaN(amount)) {
      return { isValid: false, error: `O ${type} deve ser um número.` };
  }
  if (amount < 0) {
      return { isValid: false, error: `O ${type} não pode ser negativo.` };
  }
  if (amount > 99999) {
    return { isValid: false, error: `O ${type} excede o valor máximo permitido.` };
}
  return { isValid: true };
}
