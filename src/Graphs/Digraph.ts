import Vertex from "./Vertex";
import { Edge, makeEdge } from "./Edge";
import Bag from "../Bags/Bag";
import List from "../Lists/List";

class Digraph {
  private vertices: Array<Vertex>;
  private vertexCount = 0;
  private edgeCount = 0;
  /**
   * Create a graph with @vertexCount vertices
   * @param vertexCount max number of vertices in the graph
   */
  constructor(vertexCount: number) {
    this.vertexCount = vertexCount;
    this.vertices = new Array<Vertex>(vertexCount);
    for (let i = 0; i < vertexCount; i++) {
      this.vertices[i] = new Vertex(i.toString());
    }
  }

  /**
   * Returns the number of vertices in the graph
   */
  V(): number {
    return this.vertexCount;
  }

  /**
   * Returns the number of edges in the graph
   */
  E(): number {
    return this.edgeCount;
  }

  /**
   * Returns a Vertex at index @idx
   * @param idx index of the Vertex to be returned
   */
  getVertex(idx: number): Vertex {
    if (idx < 0 || idx >= this.vertexCount) {
      throw new Error("Invalid index");
    }
    return this.vertices[idx];
  }

  addDoubleEdge(
    from: number,
    to: number,
    edge: Edge = { weight: 1, label: "" }
  ) {
    this.addEdge(from, to, edge);
    this.addEdge(to, from, edge);
  }

  /**
   * Create a new edge connecting vertex at index @from to vertex at index @to
   *
   * @param from edge star
   * @param to edge end
   */
  addEdge(from: number, to: number, edge: Edge = { weight: 1, label: "" }) {
    if (from < 0 || from >= this.vertexCount) {
      throw new Error("Invalid from index");
    }
    if (to < 0 || to >= this.vertexCount) {
      throw new Error("Invalid to index");
    }
    this.vertices[from].addEdge(to, edge);
    this.edgeCount++;
  }

  /**
   * Iterate over all vertices of the graph
   */
  *[Symbol.iterator]() {
    for (let i = 0; i < this.vertexCount; i++) {
      yield this.vertices[i];
    }
  }

  /**
   * adj is a generator that yields Vertices adjacent to the vertex at index @idx
   * @param idx vertex index
   */
  *adj(idx: number) {
    if (idx < 0 || idx >= this.vertexCount) {
      throw new Error("Invalid index");
    }
    for (let adjVertexIdx of this.vertices[idx]) {
      yield adjVertexIdx;
    }
  }

  /**
   * Return a string representation of the graph
   */
  toString(): string {
    return "TODO";
  }

  /**
   * Return a DOT string representation of the diagraph
   *
   * For the following graph
   * V = {0, 1, 2}
   * E = {(0,1), (1,2), (1,3)}
   * G = (V, G)
   *
   * we should generate the following string
   * 'digraph DiG { 0; 1; 2; 0 -> 1; 1 -> 2; 1 -> 3; }'
   */
  toDOT(): string {
    const header = "digraph DiG { ";
    let body = "";
    const footer = "}";

    for (let i = 0; i < this.vertexCount; i++) {
      body += i.toString() + "; ";
    }

    for (let from = 0; from < this.vertexCount; from++) {
      for (let to of this.vertices[from]) {
        body += `${from} -> ${to}; `;
      }
    }

    return header + body + footer;
  }
}

export default Digraph;
