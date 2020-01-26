import { Edge, makeEdge } from "./Edge";
import List from "../Lists/List";

class Vertex {
  private adjacentList: List<[number, Edge]>;
  private label: string;
  private adjCnt: number;

  /**
   * Creates a new vexter for a graph
   */
  constructor(label: string = "") {
    this.label = label;
    this.adjacentList = new List<[number, Edge]>();
    this.adjCnt = 0;
  }

  /**
   * Add adjacent vertex using its index
   *
   * @param idx vertex index
   * @param edge edge metadata
   */
  addEdge(idx: number, edge: Edge) {
    this.adjacentList.insertFirst([idx, edge]);
    this.adjCnt++;
  }

  /**
   * Return the number of adjacent vertices (a.k.a neighbors)
   */
  neighbors(): number {
    return this.adjCnt;
  }

  /**
   * Iterate over all adjacent vertices indices
   */
  *[Symbol.iterator]() {
    for (let elem of this.adjacentList) {
      yield elem[0];
    }
  }

  /**
   * Returns a string representation of the vertex
   */
  toString() {
    return "TODO";
  }
}

export default Vertex;
