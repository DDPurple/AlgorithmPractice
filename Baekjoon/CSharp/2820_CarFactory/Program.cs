using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace _2820_CarFactory
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] _stdInfo = Console.ReadLine().Split(' ').Select(a => int.Parse(a)).ToArray();
            int _N = _stdInfo[0];
            int _M = _stdInfo[1];

            List<int>[] _childArray = new List<int>[_N + 1];
            for(int i = 0; i < _N + 1; i++)
            {
                _childArray[i] = new List<int>();
            }

            int[] inputSalary = new int[_N + 1];
            inputSalary[0] = 0;
            inputSalary[1] = int.Parse(Console.ReadLine());
            string[] inputStr;
            for (int i = 2; i < _N + 1; i++)
            {
                inputStr = Console.ReadLine().Split(' ');
                inputSalary[i] = int.Parse(inputStr[0]);
                _childArray[int.Parse(inputStr[1])].Add(i);
            }
            Console.WriteLine();
        }
    }
}
