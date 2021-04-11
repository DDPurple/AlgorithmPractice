using System;
using System.Linq;

namespace _2609_GCFAndLCM
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] input = Console.ReadLine().Split(' ').Select(n => int.Parse(n)).ToArray();

            int a = Math.Max(input[0], input[1]);
            int b = Math.Min(input[0], input[1]);

            while (a % b != 0)
            {
                int temp = a % b;
                a = b;
                b = temp;
            }
            int gcd = b;
            int lcm = input[0] * input[1] / gcd;
            Console.WriteLine(gcd);
            Console.WriteLine(lcm);
        }
    }
}
