using Newtonsoft.Json.Linq;
using System;
using System.Linq;

namespace DeveloperSample.Algorithms
{
    public static class Algorithms
    {
        public static int GetFactorial(int n)
        {
            if (n == 0 || n == 1)
            {
                return 1;
            }
            else
            {
                return n * GetFactorial(n - 1);
            }
        }

        public static string FormatSeparators(params string[] items)
        {
            if (items.Length == 0)
            {
                return string.Empty;
            }
            else if (items.Length == 1)
            {
                return items[0];
            }
            else
            {
                string formattedString = string.Join(", ", items.Take(items.Length - 1));
                formattedString += $" and {items.LastOrDefault()}";
                return formattedString;
            }
        }
    }
}