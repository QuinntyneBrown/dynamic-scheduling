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
    public class TaskService : ITaskService
    {
        public TaskService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Tasks;
            this.cache = cacheProvider.GetCache();
        }

        public TaskAddOrUpdateResponseDto AddOrUpdate(TaskAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new Task());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new TaskAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<TaskDto> Get()
        {
            ICollection<TaskDto> response = new HashSet<TaskDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new TaskDto(entity)); }    
            return response;
        }


        public TaskDto GetById(int id)
        {
            return new TaskDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<Task> repository;
        protected readonly ICache cache;
    }
}
