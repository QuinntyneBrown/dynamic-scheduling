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
    public class VenueTypeService : IVenueTypeService
    {
        public VenueTypeService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.VenueTypes;
            this.cache = cacheProvider.GetCache();
        }

        public VenueTypeAddOrUpdateResponseDto AddOrUpdate(VenueTypeAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new VenueType());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new VenueTypeAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<VenueTypeDto> Get()
        {
            ICollection<VenueTypeDto> response = new HashSet<VenueTypeDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new VenueTypeDto(entity)); }    
            return response;
        }


        public VenueTypeDto GetById(int id)
        {
            return new VenueTypeDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<VenueType> repository;
        protected readonly ICache cache;
    }
}
