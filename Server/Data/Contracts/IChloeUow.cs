using Chloe.Server.Models;

namespace Chloe.Server.Data.Contracts
{
    public interface IChloeUow
    {
        IRepository<User> Users { get; }
        IRepository<Alert> Alerts { get; }
        IRepository<Contact> Contacts { get; }
        IRepository<Employee> Employees { get; }
        IRepository<Equipment> Equipment { get; }
        IRepository<EquipmentType> EquipmentTypes { get; }
        IRepository<Event> Events { get; }
        IRepository<Inventory> Inventory { get; }
        IRepository<Location> Locations { get; }
        IRepository<Organization> Organizations { get; }
        IRepository<Profile> Profiles { get; }
        IRepository<Project> Projects { get; }
        IRepository<Report> Reports { get; }
        IRepository<Resource> Resources { get; }
        IRepository<Schedule> Schedules { get; }
        IRepository<Skill> Skills { get; }
        IRepository<Task> Tasks { get; }
        IRepository<Vendor> Vendors { get; }
        IRepository<VenueType> VenueTypes { get; }
        IRepository<Venue> Venues { get; }
        void SaveChanges();
    }
}
