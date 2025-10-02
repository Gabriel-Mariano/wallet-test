export function formatMaskedCardNumber(cardNumber: string): string {
  if (!cardNumber) return '•••• •••• •••• ••••';

  const digits = cardNumber.replace(/\D/g, '');
  const last4 = digits.slice(-4);

  return `•••• •••• •••• ${last4}`;
}
