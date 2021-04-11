using System;

namespace _11653_Factorization
{
    class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());

            int root = (int)Math.Sqrt(num);
            int factor = 2;
            while (factor <= root)
            {
                if(num % factor == 0)
                {
                    do
                    {
                        Console.WriteLine(factor);
                        num /= factor;
                    } while (num % factor == 0);
                    root = (int)Math.Sqrt(num);
                }
                else
                {
                    factor++;
                }
            }
            if (num != 1)
            {
                Console.WriteLine(num);
            }
        }
    }
}
