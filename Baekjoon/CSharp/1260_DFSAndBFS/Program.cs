using System;
using System.Collections.Generic;
using System.Text;

namespace _1260_DFSAndBFS
{
    class Program
    {
        static bool[,] edges;
        static bool[] isVisit;
        static void Main(string[] args)
        {
            string[] input = Console.ReadLine().Split(' ');

            int noOfVertex = int.Parse(input[0]);
            int noOfedges = int.Parse(input[1]);
            int start = int.Parse(input[2]);

            edges = new bool[noOfVertex + 1, noOfVertex + 1];
            for(int i = 0; i < noOfedges; i++)
            {
                string[] edge = Console.ReadLine().Split(' ');

                int a = int.Parse(edge[0]);
                int b = int.Parse(edge[1]);
                edges[a, b] = true;
                edges[b, a] = true;
            }

            StringBuilder sb = new StringBuilder();

            //DFS
            isVisit = new bool[noOfVertex + 1];
            Stack<int> waitingStack = new Stack<int>();

            waitingStack.Push(start);
            while(waitingStack.Count > 0)
            {
                int next = waitingStack.Pop();
                if(isVisit[next] == false)
                {
                    isVisit[next] = true;
                    sb.Append(next);
                    sb.Append(' ');
                    
                    for (int i = noOfVertex; i > 0; i--)
                    {
                        if (edges[next, i] == true && isVisit[i] == false)
                        {
                            waitingStack.Push(i);
                        }
                    }
                }
            }
            Console.WriteLine(sb.ToString());

            sb = new StringBuilder();

            //BFS
            isVisit = new bool[noOfVertex + 1];
            Queue<int> waitingQ = new Queue<int>();

            waitingQ.Enqueue(start);
            while (waitingQ.Count > 0)
            {
                int next = waitingQ.Dequeue();
                if (isVisit[next] == false)
                {
                    isVisit[next] = true;
                    sb.Append(next);
                    sb.Append(' ');

                    for (int i = 1; i <= noOfVertex; i++)
                    {
                        if (edges[next, i] == true && isVisit[i] == false)
                        {
                            waitingQ.Enqueue(i);
                        }
                    }
                }
            }
            Console.WriteLine(sb.ToString());
        }
    }
}
