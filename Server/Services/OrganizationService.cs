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
    public class OrganizationService : IOrganizationService
    {
        public OrganizationService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Organizations;
            this.cache = cacheProvider.GetCache();
        }

        public OrganizationAddOrUpdateResponseDto AddOrUpdate(OrganizationAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new Organization());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new OrganizationAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<OrganizationDto> Get()
        {
            ICollection<OrganizationDto> response = new HashSet<OrganizationDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new OrganizationDto(entity)); }    
            return response;
        }


        public OrganizationDto GetById(int id)
        {
            return new OrganizationDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<Organization> repository;
        protected readonly ICache cache;
    }
}
