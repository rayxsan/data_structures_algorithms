In `Vertex.ts` I have the iterator that yield adjacent vertex indexes. In `Vertex.test.ts` I add several adjacent vertexes using indexes.

1. How do I know which is the index of my first vertex?

    I don't understand the question, so I'm going to interpret it as follows: For a given vertex `v`, what is the index of the first vertex `u` adjacent to `v`? The `Vertex` keeps adjacent vertices in a list. How this vertices are ordered in that list is not relevant. But first adjacent vertex is the first element of the list, which happens to be the last element you inserted, since you are using `insertFirst`.

2. When I iterate over adj vertexes, should I not get the index in return?

    This depends on what you are storing in the adjacency list of the vertex. If you store the indices, then you will get back the indices. However, it seems that you are storing a [tuple](https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple) containing both the adjacent vertex index and the edge to it. Notice that your iterator is returning only the first element of the tuple, which is the index.

3. Method addEdge(idx: number, edge: Edge) add a Vertex or an Edge or both?

    According to your code, it add both in a tuple.

Note: This create and adj Vertex (which have an idx and the metadata) to my first Vertex. Its confusing use addEdge in Vertex and DiGraph

In `Digraph.ts` when I `addEdge(..)`, I'm only adding an Edge from idx to idx

1. Where do I keep other Edges connected to a same 'from'?

    The method `Graph.addEdge(V: number, weight: number = 1)` seems to take the index of a vertex and the weight of the edge connecting the two vertices. At a first glance, it seems to be missing the second vertex. After all, an edge connects to vertices, so in order to add a new edge to a graph, you need to provide the two vertices that you want to join and how to join them, which is store in the edge metadata. Verify the signature they use in the book.

Note: In the book the created a Bag to put there all adj vertex of same idx.

    You have a `Bag` implementation ad well. If you want to use that, then go ahead.
