using System;
using System.Collections.Generic;

namespace DeveloperSample.Container
{
    public class Container
    {
        private readonly Dictionary<Type, Type> _typeMappings = new Dictionary<Type, Type>();

        public void Bind(Type interfaceType, Type implementationType)
        {
            _typeMappings[interfaceType] = implementationType;
        }

        public T Get<T>()
        {
            if (!_typeMappings.TryGetValue(typeof(T), out var implementationType))
            {
                throw new InvalidOperationException($"Type {typeof(T)} is not registered in the container.");
            }

            var instance = Activator.CreateInstance(implementationType);
            return (T)instance;
        }
    }
}