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
    public class EquipmentTypeService : IEquipmentTypeService
    {
        public EquipmentTypeService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.EquipmentTypes;
            this.cache = cacheProvider.GetCache();
        }

        public EquipmentTypeAddOrUpdateResponseDto AddOrUpdate(EquipmentTypeAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new EquipmentType());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new EquipmentTypeAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<EquipmentTypeDto> Get()
        {
            ICollection<EquipmentTypeDto> response = new HashSet<EquipmentTypeDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new EquipmentTypeDto(entity)); }    
            return response;
        }


        public EquipmentTypeDto GetById(int id)
        {
            return new EquipmentTypeDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<EquipmentType> repository;
        protected readonly ICache cache;
    }
}
