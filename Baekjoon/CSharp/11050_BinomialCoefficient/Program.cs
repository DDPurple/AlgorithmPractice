using System;
using System.Linq;

namespace _11050_BinomialCoefficient
{
    class Program
    {
        static int[,] memo;
        static void Main(string[] args)
        {
            int[] inputs = Console.ReadLine().Split(' ').Select(a => int.Parse(a)).ToArray();
            int N = inputs[0], K = inputs[1];

            memo = new int[N + 1, N + 1];

            Console.WriteLine(Get_BinomialCoefficient(N, K) % 10007);
        }

        static int Get_BinomialCoefficient(int N, int K)
        {
            if (N == K || K == 0)
            {
                return 1;
            }
            else if (memo[N, K] != 0)
            {
                return memo[N, K];
            }
            else
            {
                int temp = Get_BinomialCoefficient(N - 1, K - 1) + Get_BinomialCoefficient(N - 1, K) % 10007;
                memo[N, K] = temp;
                return temp;
            }
        }
    }
}
