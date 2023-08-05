// Posso ter quantos exports eu quiser
export function inline() {
  console.log("Export nomeado inline");
}

// Posso ter apenas um export como default (O nome dele é irrelevante, podendo ser até uma função anônima)
export default function defaultInline() {
  console.log("Export default inline");
}
