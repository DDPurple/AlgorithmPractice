using System;
using System.Linq;

namespace _1037_Divisor
{
    class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());
            int[] initInput = Console.ReadLine().Split(' ').Select(a => int.Parse(a)).OrderBy(a => a).ToArray();

            if (initInput.Length == 1)
            {
                Console.WriteLine(initInput[0] * initInput[0]);
            }
            else
            {
                Console.WriteLine(initInput[0] * initInput[initInput.Length - 1]);
            }
        }
    }
}
