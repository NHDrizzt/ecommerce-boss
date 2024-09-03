export function formatCurrencyText(value, locale = 'pt-BR', currency = 'BRL') {
  const formatter = new Intl.NumberFormat(locale, { style: 'currency', currency });
  const formattedNumber = formatter.format(value);
  return `${formattedNumber}`;
}