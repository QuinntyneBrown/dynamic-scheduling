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
    public class VenueService : IVenueService
    {
        public VenueService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Venues;
            this.cache = cacheProvider.GetCache();
        }

        public VenueAddOrUpdateResponseDto AddOrUpdate(VenueAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new Venue());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new VenueAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<VenueDto> Get()
        {
            ICollection<VenueDto> response = new HashSet<VenueDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new VenueDto(entity)); }    
            return response;
        }


        public VenueDto GetById(int id)
        {
            return new VenueDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<Venue> repository;
        protected readonly ICache cache;
    }
}
