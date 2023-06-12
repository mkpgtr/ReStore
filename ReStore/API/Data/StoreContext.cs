using Microsoft.EntityFrameworkCore;
using API.Entities;
namespace API.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions options) : base(options)
        {
            
        }

//represents a table in database
        public DbSet<Product> Products{ get; set; }
    }
}