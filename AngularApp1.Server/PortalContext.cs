using System.Data.Entity;

namespace AngularApp1.Server
{
    public class PortalContext : DbContext
    {
        public DbSet<Access>? Accesses { get; set; }
    }
}
