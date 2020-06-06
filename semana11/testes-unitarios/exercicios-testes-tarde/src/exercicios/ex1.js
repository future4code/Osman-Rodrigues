export function checaBissexto(ano) {
  const valorChecado = ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0 ? true : false;
  return valorChecado
};
