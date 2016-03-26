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
    public class EquipmentService : IEquipmentService
    {
        public EquipmentService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Equipment;
            this.cache = cacheProvider.GetCache();
        }

        public EquipmentAddOrUpdateResponseDto AddOrUpdate(EquipmentAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new Equipment());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new EquipmentAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<EquipmentDto> Get()
        {
            ICollection<EquipmentDto> response = new HashSet<EquipmentDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new EquipmentDto(entity)); }    
            return response;
        }


        public EquipmentDto GetById(int id)
        {
            return new EquipmentDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<Equipment> repository;
        protected readonly ICache cache;
    }
}
