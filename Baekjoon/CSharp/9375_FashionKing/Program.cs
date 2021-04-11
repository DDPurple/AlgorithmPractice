using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace _9375_FashionKing
{
    class Program
    {
        static void Main(string[] args)
        {
            StringBuilder sb = new StringBuilder();

            int noOfCases = int.Parse(Console.ReadLine());
            for(int i = 0; i < noOfCases; i++)
            {
                int noOfClothes = int.Parse(Console.ReadLine());
                Dictionary<string, int> clothes = new Dictionary<string, int>();
                for(int j = 0; j < noOfClothes; j++)
                {
                    string[] input = Console.ReadLine().Split(' ').ToArray();
                    if (clothes.ContainsKey(input[1]))
                    {
                        clothes[input[1]]++;
                    }
                    else
                    {
                        clothes.Add(input[1], 1);
                    }
                }
                int result = 1;
                foreach(string cloth in clothes.Keys)
                {
                    result *= (clothes[cloth] + 1);
                }
                sb.Append(result - 1);
                sb.Append("\n");
            }
            Console.WriteLine(sb.ToString());
        }
    }
}
