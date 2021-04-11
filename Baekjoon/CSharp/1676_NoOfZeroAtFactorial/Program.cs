using System;

namespace _1676_NoOfZeroAtFactorial
{
    class Program
    {
        static void Main(string[] args)
        {
            int input = int.Parse(Console.ReadLine());

            int result = 0;
            for(int i = 5; i <= input; i += 5)
            {
                int cur = i;
                do
                {
                    result++;
                    cur /= 5;
                } while (cur % 5 == 0);
            }
            Console.WriteLine(result);
        }
    }
}
