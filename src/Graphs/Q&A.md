# Q1:

    In Vertex.ts i have the iterator that yield adjacent vertex indexes. In Vertex.test.ts I add
    several adjacent vertexes using indexes.

## 1. How do i know which is the index of my first vertex?

## 2. When i iterate over adj vertexes should i not get the index in return?

## 3. Method addEdge(idx: number, edge: Edge) add a Vertex or an Edge or both?

    Note: This create and adj Vertex (which have an idx and the metadata) to my first Vertex. Its               confusing use addEdge in Vertex and DiGraph

# Q2:

    In Digraph.ts when i addEdge(..). i'm only adding an Edge from idx to idx

## 1 Where do i keep other Edges connected to a same 'from'?

    Note: In the book the created a Bag to put there all adj vertex of same idx.
