class Vertex {
  private adjacencyList;

  /**
   * Creates a new vexter for a graph
   */
  constructor() {}

  addEdge(idx: number, weight = 1) {}

  /**
   * Return the number of adjacent vertes (a.k.a neighbors)
   */
  neighbors(): number {
    return 0;
  }

  /**
   * Iterate over all adjacent vertices
   */
  *[Symbol.iterator]() {}

  /**
   * Returns a string representation of the vertex
   */
  toString() {
    return "TODO";
  }
}

export default Vertex;
