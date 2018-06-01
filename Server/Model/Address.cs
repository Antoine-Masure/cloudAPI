using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace Model
{
    public class Address
    {

        public int Id {get; set;}
        public int PostalCode { get; set; }
        public string  Street { get; set; }
        public string City{get;set;}
        public int Number{get; set;}
        public string Country {get;set;}
       // public int PersonsId{get;set;}
        public Person Persons {get;set;}

    }
    
}