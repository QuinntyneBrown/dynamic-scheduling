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
    public class ScheduleService : IScheduleService
    {
        public ScheduleService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Schedules;
            this.cache = cacheProvider.GetCache();
        }

        public ScheduleAddOrUpdateResponseDto AddOrUpdate(ScheduleAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new Schedule());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new ScheduleAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<ScheduleDto> Get()
        {
            ICollection<ScheduleDto> response = new HashSet<ScheduleDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new ScheduleDto(entity)); }    
            return response;
        }


        public ScheduleDto GetById(int id)
        {
            return new ScheduleDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<Schedule> repository;
        protected readonly ICache cache;
    }
}
