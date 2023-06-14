using FullStackBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace FullStackBackend.Data
{
    public class FullStackDbContext:DbContext
    {
        public FullStackDbContext(DbContextOptions options) : base(options) 
        {
        
        
        }
        public DbSet<Employee> Employees { get; set; }

    }
}
