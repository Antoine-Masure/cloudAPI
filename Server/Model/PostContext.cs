using Microsoft.EntityFrameworkCore;

namespace Model
{
    public class PostContext: DbContext
    {

        public PostContext(DbContextOptions<PostContext> options):base(options){
        }
        public DbSet<Person> Persons {get;set;}
        public DbSet<Address> Addresses {get;set;}
        
       
    }
    
}