import Digraph from "../Graphs/Digraph";

class BreadthFirstPaths {
  private marked: boolean[];
  private edgeTo: number[];
  private s: number;

  constructor(G: Digraph, source: number) {
    this.marked = new Array<boolean>(G.V());
    this.edgeTo = new Array<number>(G.V());
    this.s = source;
  }
}
