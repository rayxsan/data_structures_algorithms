import Vertex from "../Graphs/Vertex";
import { Edge, makeEdge } from "../Graphs/Edge";

describe("Vertex", () => {
  test("Add edge", () => {
    const myVertex = new Vertex("0");
    const adjCount = 10;

    for (let i = 0; i < adjCount; i++) {
      myVertex.addEdge(i, makeEdge(i, i.toString()));
      expect(myVertex.neighbors()).toBe(i + 1);
    }

    const map = new Map<number, number>();
    for (let vertexIndex of myVertex) {
      const cnt = map.get(vertexIndex) || 0;
      map.set(vertexIndex, cnt + 1);
    }
    map.forEach((cnt, vertexIndex) => {
      expect(cnt).toEqual(1);
    });
    expect(map.size).toEqual(adjCount);
  });
});
