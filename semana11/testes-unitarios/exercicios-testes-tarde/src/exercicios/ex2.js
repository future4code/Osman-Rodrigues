export function checaPalindromo(frase) {
  
  return (
    frase ===
    frase
      .split("")
      .reverse()
      .join("")
  );
}
