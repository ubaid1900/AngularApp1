using System.Data.Entity;

namespace AngularApp1.Server
{
    public class WeatherForecast
    {
        public DateOnly Date { get; set; }

        public int TemperatureC { get; set; }

        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

        public string? Summary { get; set; }
    }

    public class PortalContext : DbContext
    {
        public DbSet<Access>? Accesses { get; set; }
    }
}
