import BreadFirstSearch from "../Graphs/BFS";
import Digraph from "../Graphs/Digraph";

describe("BFS", () => {
  test("g1", () => {
    const g = new Digraph(6);
    g.addDoubleEdge(0, 1);
    g.addDoubleEdge(0, 4);
    g.addDoubleEdge(1, 2);
    g.addDoubleEdge(1, 4);
    g.addDoubleEdge(2, 3);
    g.addDoubleEdge(3, 4);
    g.addDoubleEdge(3, 5);

    const bfs = new BreadFirstSearch(g, 0);
    expect(bfs.hasPathTo(2)).toBe(true);
    /* for (let i = 0; i < g.V(); i++) {
      expect(bfs.hasPathTo(i)).toBe(true);
    } */
  });
});
