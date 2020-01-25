import Vertex from "./Vertex";

class Digraph {
  private vertices: Array<Vertex>;

  /**
   * Create a graph with @vertexCount vertices
   * @param vertexCount max number of vertices in the graph
   */
  constructor(vertexCount: number) {}

  /**
   * Returns the number of vertices in the graph
   */
  V(): number {
    return 0;
  }

  /**
   * Returns the number of edges in the graph
   */
  E(): number {
    return 0;
  }

  addEdge(V: number, weight: number = 1) {}

  /**
   * Iterate over all vertices of the graph
   */
  *[Symbol.iterator]() {}

  /**
   * abj is a generator that yields Vertices adjacent to the vertex at index @number
   * @param v vertex index
   */
  *adj(v: number) {}

  /**
   * Return a string representation of the graph
   */
  toString(): string {
    return "TODO";
  }
}

export default Digraph;
