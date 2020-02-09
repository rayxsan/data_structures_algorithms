import BreadFirstSearch from "../Graphs/BFS";
import Digraph from "../Graphs/Digraph";

describe("BFS", () => {
  test("g1", () => {
    const g = new Digraph(6);
    g.addEdge(0, 1);
    g.addEdge(0, 4);
    g.addEdge(1, 2);
    g.addEdge(1, 4);
    g.addEdge(2, 3);
    g.addEdge(3, 4);
    g.addEdge(3, 5);

    const bfs = new BreadFirstSearch(g, 0);
    //expect(bfs.hasPathTo(1)).toBe(true);
    for (let i = 0; i < g.V(); i++) {
      expect(bfs.hasPathTo(i)).toBe(true);
    }
  });

  test("g2", () => {
    const g = new Digraph(4);
    g.addDoubleEdge(0, 1);
    g.addDoubleEdge(1, 2);
    g.addDoubleEdge(1, 3);

    const bfs = new BreadFirstSearch(g, 0);
    expect(bfs.hasPathTo(2)).toBe(true);
    for (let i = 0; i < g.V(); i++) {
      expect(bfs.hasPathTo(i)).toBe(true);
    }
  });

  test("Shortest path", () => {
    const g = new Digraph(5);
    g.addDoubleEdge(0, 1);
    g.addDoubleEdge(1, 2);
    g.addDoubleEdge(1, 3);
    g.addDoubleEdge(2, 4);
    g.addDoubleEdge(1, 4);
    const bfs = new BreadFirstSearch(g, 0);
    const path = bfs.pathTo(4);
    for (let i = 0; i < 2; i++) {
      expect(path.pop()).toBe(i);
    }
  });
});
