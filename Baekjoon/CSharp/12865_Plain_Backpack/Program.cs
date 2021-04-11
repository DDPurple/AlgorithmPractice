using System;
using System.Linq;

namespace _12865_Plain_Backpack
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] initInput = Console.ReadLine().Split(' ').Select(a => int.Parse(a)).ToArray();
            int num = initInput[0];
            int maxWeight = initInput[1];

            int[,] DP = new int[num + 1, maxWeight + 1];

            for (int i = 1; i <= num; i++)
            {
                int[] thing = Console.ReadLine().Split(' ').Select(a => int.Parse(a)).ToArray();
                int weight = thing[0];
                int value = thing[1];

                for (int j = 0; j <= maxWeight; j++)
                {
                    if (j - weight >= 0)
                    {
                        DP[i, j] = Math.Max(DP[i - 1, j], DP[i - 1, j - weight] + value);
                    }
                    else
                    {
                        DP[i, j] = DP[i - 1, j];
                    }
                }
            }

            Console.WriteLine(DP[num, maxWeight]);
        }
    }
}
