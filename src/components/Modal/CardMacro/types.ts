export type Macros = "protein" | "cabos" | "fat"

export type CardMacroProps = {
  name: string;
  value: number;
  type: Macros;
}
