import DepthFirstSearch from "../Graphs/DFS";
import Digraph from "../Graphs/Digraph";

function verifyDfsVisitor(g: Digraph): boolean {
  const a = new Array<number>(g.V());
  for (let i = 0; i < g.V(); i++) {
    a[i] = 0;
  }
  new DepthFirstSearch(g, 0, (vertex, idx) => {
    a[idx]++;
  });

  for (let i = 0; i < g.V(); i++) {
    if (a[i] !== 1) {
      return false;
    }
  }

  return true;
}

describe("DFS", () => {
  test("g1", () => {
    const g = new Digraph(6);
    g.addDoubleEdge(0, 1);
    g.addDoubleEdge(0, 4);
    g.addDoubleEdge(1, 2);
    g.addDoubleEdge(1, 4);
    g.addDoubleEdge(2, 3);
    g.addDoubleEdge(3, 4);
    g.addDoubleEdge(3, 5);
    // console.log(g.toDOT());

    expect(verifyDfsVisitor(g)).toBe(true);
  });
});
