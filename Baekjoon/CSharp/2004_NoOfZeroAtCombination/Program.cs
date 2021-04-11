using System;

namespace _2004_NoOfZeroAtCombination
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] inputs = Console.ReadLine().Split(' ');

            int N = int.Parse(inputs[0]);
            int R = int.Parse(inputs[1]);
            long countOf2 = 0;
            long countOf5 = 0;

            countOf2 = GetNoOfFactor(N, 2) - GetNoOfFactor(N - R, 2) - GetNoOfFactor(R, 2);
            countOf5 = GetNoOfFactor(N, 5) - GetNoOfFactor(N - R, 5) - GetNoOfFactor(R, 5);

            Console.WriteLine(Math.Min(countOf2, countOf5));
        }

        static long GetNoOfFactor(long n, long factor)
        {
            long result = 0;
            long mulitple = factor;
            while(n >= factor)
            {
                result += n / factor;
                factor *= mulitple;
            }
            return result;
        }
    }
}
