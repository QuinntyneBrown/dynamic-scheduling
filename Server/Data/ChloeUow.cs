using Chloe.Server.Data.Contracts;
using Chloe.Server.Models;
using System;

namespace Chloe.Server.Data
{
    public class ChloeUow : IChloeUow
    {
        protected IDbContext dbContext;

        protected IRepositoryProvider RepositoryProvider { get; set; }

        public ChloeUow(IDbContext dbContext = null)
        {
            this.dbContext = dbContext;
            ConfigureDbContext(this.dbContext);
            var repositoryProvider = new RepositoryProvider(new RepositoryFactories());
            repositoryProvider.dbContext = this.dbContext;
            RepositoryProvider = repositoryProvider;
        }

        public ChloeUow(IRepositoryProvider repositoryProvider, IDbContext dbContext = null)
        {
            this.dbContext = dbContext;
            ConfigureDbContext(this.dbContext);
            repositoryProvider.dbContext = this.dbContext;
            RepositoryProvider = repositoryProvider;
        }
        
        public IRepository<User> Users { get { return GetStandardRepo<User>(); } }
        public IRepository<Role> Roles { get { return GetStandardRepo<Role>(); } }
        public IRepository<Alert> Alerts { get { return GetStandardRepo<Alert>(); } }
        public IRepository<Contact> Contacts { get { return GetStandardRepo<Contact>(); } }
        public IRepository<Employee> Employees { get { return GetStandardRepo<Employee>(); } }
        public IRepository<Equipment> Equipment { get { return GetStandardRepo<Equipment>(); } }
        public IRepository<EquipmentType> EquipmentTypes { get { return GetStandardRepo<EquipmentType>(); } }
        public IRepository<Event> Events { get { return GetStandardRepo<Event>(); } }
        public IRepository<Inventory> Inventory { get { return GetStandardRepo<Inventory>(); } }
        public IRepository<Location> Locations { get { return GetStandardRepo<Location>(); } }
        public IRepository<Organization> Organizations { get { return GetStandardRepo<Organization>(); } }
        public IRepository<Profile> Profiles { get { return GetStandardRepo<Profile>(); } }
        public IRepository<Project> Projects { get { return GetStandardRepo<Project>(); } }
        public IRepository<Report> Reports { get { return GetStandardRepo<Report>(); } }
        public IRepository<Resource> Resources { get { return GetStandardRepo<Resource>(); } }
        public IRepository<Schedule> Schedules { get { return GetStandardRepo<Schedule>(); } }
        public IRepository<Skill> Skills { get { return GetStandardRepo<Skill>(); } }
        public IRepository<Task> Tasks { get { return GetStandardRepo<Task>(); } }
        public IRepository<Vendor> Vendors { get { return GetStandardRepo<Vendor>(); } }
        public IRepository<VenueType> VenueTypes { get { return GetStandardRepo<VenueType>(); } }
        public IRepository<Venue> Venues { get { return GetStandardRepo<Venue>(); } }

        protected void ConfigureDbContext(IDbContext dbContext)
        {
            dbContext.Configuration.ProxyCreationEnabled = false;
            dbContext.Configuration.LazyLoadingEnabled = false;
            dbContext.Configuration.ValidateOnSaveEnabled = false;
        }
        
        public void SaveChanges()
        {
            this.dbContext.SaveChanges();
        }

        protected IRepository<T> GetStandardRepo<T>() where T : class
        {
            return RepositoryProvider.GetRepositoryForEntityType<T>();
        }

        protected T GetRepo<T>() where T : class
        {
            return RepositoryProvider.GetRepository<T>();
        }

        #region IDisposable

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (this.dbContext != null)
                {
                    this.dbContext.Dispose();
                }
            }
        }

        #endregion
        
        public void Add<T>(T entity)
        {
            throw new NotImplementedException();
        }

        public void Update<T>(T entity)
        {
            throw new NotImplementedException();
        }
    }
}
