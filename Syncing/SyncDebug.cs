using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Xunit;

namespace DeveloperSample.Syncing
{
    public class SyncDebug
    {
        private int count = 0;
        public List<string> InitializeList(IEnumerable<string> items)
        {
            var bag = new ConcurrentBag<string>();
            Parallel.ForEach(items, i =>
            {
                var r = Task.Run(() => i).Result;
                bag.Add(r);
            });
            var list = bag.ToList();
            return list;
        }



        public Dictionary<int, string> InitializeDictionary(Func<int, string> callback)
        {
            var dictionary = new Dictionary<int, string>();
            var count = 0;

            for (int i = 0; i < 100; i++)
            {
                Thread.Sleep(1); // Simulating some work
                Interlocked.Increment(ref count);
                dictionary[i] = callback(i);
            }

            // Asserting the conditions mentioned in the original method
            Assert.Equal(100, count);
            Assert.Equal(100, dictionary.Count);

            return dictionary;
        }
    }
}