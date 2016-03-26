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
    public class ResourceService : IResourceService
    {
        public ResourceService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Resources;
            this.cache = cacheProvider.GetCache();
        }

        public ResourceAddOrUpdateResponseDto AddOrUpdate(ResourceAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new Resource());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new ResourceAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<ResourceDto> Get()
        {
            ICollection<ResourceDto> response = new HashSet<ResourceDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new ResourceDto(entity)); }    
            return response;
        }


        public ResourceDto GetById(int id)
        {
            return new ResourceDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<Resource> repository;
        protected readonly ICache cache;
    }
}
