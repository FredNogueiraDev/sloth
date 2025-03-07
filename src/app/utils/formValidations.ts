import toast from "react-hot-toast";

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

export function validateAmount(amount: number, type: string): { isValid: boolean; error?: string } {
  if (Number.isNaN(amount)) {
      return { isValid: false, error: `O ${type} deve ser um número.` };
  }
  if (amount < 0) {
      return { isValid: false, error: `O ${type} não pode ser negativo.` };
  }
  return { isValid: true };
}
