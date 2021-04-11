using System;
using System.Linq;
using System.Text;

namespace _2981_Check_GCDs
{
    class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());
            int[] inputs = new int[num];
            for (int i = 0; i < num; i++)
            {
                inputs[i] = int.Parse(Console.ReadLine());
            }

            inputs = inputs.OrderBy(a => a).ToArray();
            int curGCD = inputs[1] - inputs[0];
            for (int i = 2; i < num; i++)
            {
                curGCD = Get_GCD(curGCD, inputs[i] - inputs[i-1]);
            }

            StringBuilder sb = new StringBuilder();

            for(int i = 2; i <= curGCD; i++)
            {
                if (curGCD % i == 0)
                {
                    sb.Append(i);
                    sb.Append(' ');
                }
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
