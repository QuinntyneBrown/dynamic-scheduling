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
    public class ProjectService : IProjectService
    {
        public ProjectService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Projects;
            this.cache = cacheProvider.GetCache();
        }

        public ProjectAddOrUpdateResponseDto AddOrUpdate(ProjectAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new Project());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new ProjectAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<ProjectDto> Get()
        {
            ICollection<ProjectDto> response = new HashSet<ProjectDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new ProjectDto(entity)); }    
            return response;
        }


        public ProjectDto GetById(int id)
        {
            return new ProjectDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<Project> repository;
        protected readonly ICache cache;
    }
}
