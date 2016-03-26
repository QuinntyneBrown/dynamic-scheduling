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
    public class AlertService : IAlertService
    {
        public AlertService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Alerts;
            this.cache = cacheProvider.GetCache();
        }

        public AlertAddOrUpdateResponseDto AddOrUpdate(AlertAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new Alert());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new AlertAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<AlertDto> Get()
        {
            ICollection<AlertDto> response = new HashSet<AlertDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new AlertDto(entity)); }    
            return response;
        }


        public AlertDto GetById(int id)
        {
            return new AlertDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<Alert> repository;
        protected readonly ICache cache;
    }
}
