// An Iterative C++ program to do DFS traversal from
// a given source vertex. DFS(int s) traverses vertices
// reachable from s.
#include<bits/stdc++.h>
using namespace std;

// This class represents a directed graph using adjacency
// list representation
class Graph
{
	int V; // No. of vertices
	list<int> *adj; // adjacency lists
public:
	Graph(int V); // Constructor
	void addEdge(int v, int w); // to add an edge to graph
	void DFS(int s); // prints all vertices in DFS manner
	// from a given source.
};

Graph::Graph(int V)
{
	this->V = V;
	adj = new list<int>[V];
}

void Graph::addEdge(int v, int w)
{
	adj[v].push_back(w); // Add w to v’s list.
	adj[w].push_back(v); // Add w to v’s list.
}

// prints all not yet visited vertices reachable from s
void Graph::DFS(int s)
{
	vector<bool> visited(V, false);
	stack<int> stack;
	stack.push(s);

	while (!stack.empty())
	{
		int s = stack.top();
		stack.pop();
		if (!visited[s])
		{
			cout << s << " ";
			visited[s] = true;
		}
		for (auto i = adj[s].begin(); i != adj[s].end(); ++i)
			if (!visited[*i])
				stack.push(*i);
	}
}

// Driver program to test methods of graph class
int main()
{
	Graph g(7); // Total 5 vertices in graph
	g.addEdge(0, 1);
    g.addEdge(0, 3);
    g.addEdge(1, 2);
    g.addEdge(1, 3);
    g.addEdge(1, 5);
    g.addEdge(2, 1);
    g.addEdge(2, 3);
    g.addEdge(2, 5);
    g.addEdge(3, 0);
    g.addEdge(3, 1);
    g.addEdge(3, 2);
    g.addEdge(3, 4);
    g.addEdge(4, 2);
    g.addEdge(4, 3);
    g.addEdge(4, 6);
    g.addEdge(5, 1);
    g.addEdge(5, 2);
    g.addEdge(6, 1);
    g.addEdge(6, 4);

	cout << "Following is Depth First Traversal\n";
	g.DFS(0);

	return 0;
}
