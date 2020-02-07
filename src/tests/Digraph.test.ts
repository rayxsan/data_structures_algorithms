import Digraph from "../Graphs/Digraph";

describe("Digraph", () => {
  test("Vertex Count", () => {
    const dig = new Digraph(3);
    expect(dig.V()).toEqual(3);
  });

  test("Add Edges to Graph", () => {
    const dig = new Digraph(3);
    dig.addEdge(0, 1);
    dig.addEdge(1, 2);
    dig.addEdge(1, 3);
    expect(dig.E()).toEqual(3);
  });

  test("String representation of graph", () => {
    const dig = new Digraph(3);
    dig.addEdge(0, 1);
    dig.addEdge(1, 2);
    dig.addEdge(1, 3);
    dig.addEdge(1, 4);
    expect(dig.toDOT()).toBe(
      "digraph DiG { 0; 1; 2; 0 -> 1; 1 -> 4; 1 -> 3; 1 -> 2; }"
    );
  });
});
