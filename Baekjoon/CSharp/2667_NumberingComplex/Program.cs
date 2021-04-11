using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace _2667_NumberingComplex
{
    class Program
    {
        static bool[,] map;
        static int lengthOfEdge;
        static List<int> complexes = new List<int>();
        static int[] dirX = { 0, 0, 1, -1 };
        static int[] dirY = { -1, 1, 0, 0 };
        static void Main(string[] args)
        {
            lengthOfEdge = int.Parse(Console.ReadLine());

            map = new bool[lengthOfEdge, lengthOfEdge];

            for(int i = 0; i < lengthOfEdge; i++)
            {
                string input = Console.ReadLine();
                for(int j = 0; j < lengthOfEdge; j++)
                {
                    if(input[j] == '1')
                    {
                        map[i, j] = true;
                    }
                }
            }

            for (int i = 0; i < lengthOfEdge; i++)
            {
                for (int j = 0; j < lengthOfEdge; j++)
                {
                    if (map[i, j])
                    {
                        ExploreCurrentComplex(i, j);
                    }
                }
            }

            StringBuilder sb = new StringBuilder();
            complexes = complexes.OrderBy(a => a).ToList();

            sb.Append(complexes.Count);
            for(int i = 0; i < complexes.Count; i++)
            {
                sb.Append("\n");
                sb.Append(complexes[i]);
            }
            Console.WriteLine(sb.ToString());
        }

        static void ExploreCurrentComplex(int x, int y)
        {
            int count = 1;
            Queue<int> nextXs = new Queue<int>();
            Queue<int> nextYs = new Queue<int>();
            map[x, y] = false;
            nextXs.Enqueue(x);
            nextYs.Enqueue(y);

            while(nextXs.Count > 0)
            {
                int curX = nextXs.Dequeue();
                int curY = nextYs.Dequeue();

                for(int i = 0; i < 4; i++)
                {
                    int nextX = curX + dirX[i];
                    int nextY = curY + dirY[i];
                    if(CanGo(nextX, nextY))
                    {
                        map[nextX, nextY] = false;
                        nextXs.Enqueue(nextX);
                        nextYs.Enqueue(nextY);
                        count++;
                    }
                }
            }
            complexes.Add(count);
        }
        static bool CanGo(int nextX, int nextY)
        {
            if(nextX > -1 
                && nextY > -1
                && nextX < lengthOfEdge
                && nextY < lengthOfEdge
                && map[nextX, nextY] == true)
            {
                return true;
            }
            return false;
        }
    }
}
