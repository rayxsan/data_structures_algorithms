export interface Edge {
  label: string;
  weight: number;
}

export function makeEdge(weight: number, label: string): Edge {
  return {
    weight,
    label
  };
}
