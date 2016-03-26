using Chloe.Server.Data.Contracts;
using Chloe.Server.Models;
using System.Data.Entity;

namespace Chloe.Server.Data
{
    public class ChloeContext: DbContext, IDbContext
    {
        public ChloeContext()
            : base(nameOrConnectionString: "ChloeContext")
        {
            Configuration.ProxyCreationEnabled = false;
            Configuration.LazyLoadingEnabled = false;
            Configuration.AutoDetectChangesEnabled = true;
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Alert> Alerts { get; set; }
        public DbSet<Contact> Contacts { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Equipment> Equipment { get; set; }
        public DbSet<EquipmentType> EquipmentTypes { get; set; }
        public DbSet<Event> Events { get; set; }
        public DbSet<Inventory> Inventory { get; set; }
        public DbSet<Location> Locations { get; set; }
        public DbSet<Organization> Organizations { get; set; }
        public DbSet<Profile> Profiles { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Report> Reports { get; set; }
        public DbSet<Resource> Resources { get; set; }
        public DbSet<Schedule> Schedules { get; set; }
        public DbSet<Skill> Skills { get; set; }
        public DbSet<Task> Tasks { get; set; }
        public DbSet<Vendor> Vendors { get; set; }
        public DbSet<VenueType> VenueTypes { get; set; }
        public DbSet<Venue> Venues { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
     
        } 
    }
}
