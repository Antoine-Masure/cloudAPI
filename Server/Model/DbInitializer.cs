
using System.Linq;

namespace Model
{
    public class DBInitializer{
        public static void Initialize(PostContext context)
        {
            context.Database.EnsureCreated();
            if(!context.Persons.Any())
            {  
                var person1 = new Person{
                    FirstName = "Lars",
                    LastName= "Annderson"
                };
                context.Persons.Add(person1);
                var person2 = new Person{
                    FirstName = "Bart",
                    LastName= "Peeters"
                };
                context.Persons.Add(person2);
                var person3 = new Person{
                    FirstName = "Linda",
                    LastName= "Van Geel"
                };
                context.Persons.Add(person3);
                var person4 = new Person{
                    FirstName = "Peter",
                    LastName= "Nys"
                };
                context.Persons.Add(person4);
                var person5 = new Person{
                    FirstName = "Laurien",
                    LastName= "Van Loo"
                };
                context.Persons.Add(person5);
                var addres1=new Address{
                    City="schoten",
                    PostalCode=2900,
                    Country="belgium",
                    Street="villerslei",
                    Number=30,
                    Persons=person1
                };
                context.Addresses.Add(addres1);
                var addres2=new Address{
                    City="schoten",
                    PostalCode=2900,
                    Country="belgium",
                    Street="villerslei",
                    Number=2,
                    Persons=person2
                };
                context.Addresses.Add(addres2);
                var addres3=new Address{
                    City="Schilde",
                    PostalCode=2970,
                    Country="belgium",
                    Street="TurnhoutseBaan",
                    Number=300,
                    Persons=person3
                };
                context.Addresses.Add(addres3);
                var addres4=new Address{
                    City="New York",
                    PostalCode=10000,
                    Country="Verenigde Staten",
                    Street="Broadway",
                    Number=500,
                    Persons=person4
                };
                context.Addresses.Add(addres4);
                var addres5=new Address{
                    City="Parijs",
                    PostalCode=900,
                    Country="Frankrijk",
                    Street="Champs Ellysée",
                    Number=100,
                    Persons=person5
                };
                context.Addresses.Add(addres5);
                context.SaveChanges();
            }  
        }      
    }
}

             