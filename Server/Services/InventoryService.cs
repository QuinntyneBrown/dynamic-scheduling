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
    public class InventoryService : IInventoryService
    {
        public InventoryService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Inventory;
            this.cache = cacheProvider.GetCache();
        }

        public InventoryAddOrUpdateResponseDto AddOrUpdate(InventoryAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new Inventory());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new InventoryAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<InventoryDto> Get()
        {
            ICollection<InventoryDto> response = new HashSet<InventoryDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new InventoryDto(entity)); }    
            return response;
        }


        public InventoryDto GetById(int id)
        {
            return new InventoryDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<Inventory> repository;
        protected readonly ICache cache;
    }
}
