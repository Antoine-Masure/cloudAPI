
using System.Linq;

namespace Model
{
    public class DBInitializer{
        public static void Initialize(PostContext context)
        {
            context.Database.EnsureCreated();
            //List<Address> addresses;
            if(!context.Persons.Any())
            {  
                var person1 = new Person{
                    FirstName = "Lars",
                    LastName= "Annderson"
                };
                context.Persons.Add(person1);
                var addres1=new Address{
                    City="schoten",
                    PostalCode=2000,
                    Country="belgium",
                    Street="villerslei",
                    Number=2,
                    Person=person1
                };
                context.Addresses.Add(addres1);
                context.SaveChanges();
            }  
        }      
    }
}

             