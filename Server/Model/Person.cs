using System.Collections.Generic;
using Newtonsoft.Json;

namespace Model
{
    public class Person
    {
        public int Id {get; set;}
        public string FirstName{get;set;}
        public string LastName { get; set; }
        [JsonIgnore]
        public Address Addresses{get;set;}
    }
    
}