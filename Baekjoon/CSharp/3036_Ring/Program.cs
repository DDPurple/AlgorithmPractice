using System;
using System.Linq;
using System.Text;

namespace _3036_Ring
{
    class Program
    {
        static void Main(string[] args)
        {
            int count = int.Parse(Console.ReadLine());
            int[] rings = Console.ReadLine().Split(' ').Select(ring => int.Parse(ring)).ToArray();

            int a = rings[0];

            StringBuilder sb = new StringBuilder();
            for(int i = 1; i < count; i++)
            {
                int curGCD = Get_GCD(a, rings[i]);
                sb.Append(a / curGCD);
                sb.Append('/');
                sb.Append(rings[i] / curGCD);
                sb.Append("\n");
            }
            Console.WriteLine(sb.ToString());
        }

        static int Get_GCD(int a, int b)
        {
            if(a % b == 0)
            {
                return b;
            }
            else
            {
                return Get_GCD(b, a % b);
            }
        }
    }
}
