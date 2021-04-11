using System;
using System.Collections.Generic;
using System.Text;

namespace _2606_Virus
{
    class Program
    {
        static bool[,] edges;
        static bool[] isVisit;
        static void Main(string[] args)
        {

            int noOfVertex = int.Parse(Console.ReadLine());
            int noOfedges = int.Parse(Console.ReadLine());

            edges = new bool[noOfVertex + 1, noOfVertex + 1];
            for (int i = 0; i < noOfedges; i++)
            {
                string[] edge = Console.ReadLine().Split(' ');

                int a = int.Parse(edge[0]);
                int b = int.Parse(edge[1]);
                edges[a, b] = true;
                edges[b, a] = true;
            }

            int result = 0;

            //BFS
            isVisit = new bool[noOfVertex + 1];
            Queue<int> waitingQ = new Queue<int>();

            waitingQ.Enqueue(1);
            while (waitingQ.Count > 0)
            {
                int next = waitingQ.Dequeue();
                if (isVisit[next] == false)
                {
                    isVisit[next] = true;
                    result++;

                    for (int i = 1; i <= noOfVertex; i++)
                    {
                        if (edges[next, i] == true && isVisit[i] == false)
                        {
                            waitingQ.Enqueue(i);
                        }
                    }
                }
            }
            Console.WriteLine(result - 1);
        }
    }
}
