# Graphs

Let V be a set of vertices.
Let E be a set of edges. An edge is tuple (u, v) where both u and v belong to V.

G = (V, E)

For all u and v, if (u,v) belongs to E, then u and v belong to V.

V = {a,b,c,d}
E = {(a,b), (b,c), (b,d)}

## Representing a graph as a matrix

```
   a  b  c  d
a  0  1  0  0
b  1  0  0  0
c  0  1  0  0
d  0  1  0  0
```

## Representing a graph as list of adjacent vertices

```
a -> b
b -> c -> d
c -> b
d -> b
```

```ts
// options 1

interface Vertex {
    label: string;
}

interface BucketItem {
    v: Vertex;
    l: List<[VertexIndex, EdgeMetadata]>;
};

buckets = new Array<BucketItem>

// option 2
interface Vertex {
    label: string;
    adjList: List<[VertexIndex, EdgeMetadata]>;
};

bucket = new Array<Vertex>
```

## Describing a graph with text

As the size of the graph grows, it become very difficult to imagine the graph. The Graph Description Language (DOT) is a popular way to describe and visualize graphs of any size. The following link contains more information about it.

https://en.wikipedia.org/wiki/DOT_(graph_description_language)

## Visualizing graphs

There are many programs that can parse and depict a graph that is described in DOT. One such program can be found [here](https://dreampuf.github.io/GraphvizOnline/)

## Depth First Search

The classic recursive method for
searching in a connected graph (visiting all
of its vertices and edges) mimics Tremaux
maze exploration but is even simpler to de-
scribe. To search a graph, invoke a recursive
method that visits vertices. To visit a vertex:

■ Mark it as having been visited.
■ Visit (recursively) all the vertices that
are adjacent to it and that have not
yet been marked.
