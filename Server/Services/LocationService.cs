using System;
using System.Collections.Generic;
using Chloe.Server.Data.Contracts;
using Chloe.Server.Dtos;
using Chloe.Server.Services.Contracts;
using System.Data.Entity;
using System.Linq;
using Chloe.Server.Models;

namespace Chloe.Server.Services
{
    public class LocationService : ILocationService
    {
        public LocationService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Locations;
            this.cache = cacheProvider.GetCache();
        }

        public LocationAddOrUpdateResponseDto AddOrUpdate(LocationAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new Location());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new LocationAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<LocationDto> Get()
        {
            ICollection<LocationDto> response = new HashSet<LocationDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new LocationDto(entity)); }    
            return response;
        }


        public LocationDto GetById(int id)
        {
            return new LocationDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<Location> repository;
        protected readonly ICache cache;
    }
}
