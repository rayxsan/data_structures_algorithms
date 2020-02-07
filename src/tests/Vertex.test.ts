import Vertex from "../Graphs/Vertex";
import { Edge, makeEdge } from "../Graphs/Edge";

describe("Vertex", () => {
  test("Add edge", () => {
    const myVertex = new Vertex("0");

    for (let i = 0; i < 10; i++) {
      myVertex.addEdge(i, makeEdge(i, i.toString()));
      expect(myVertex.neighbors()).toBe(i + 1);
    }

    //Stuck here
    /* for (let ver in myVertex) {
      console.log(ver);
      expect(ver[0]).toBe("a");
    } */
  });
});
