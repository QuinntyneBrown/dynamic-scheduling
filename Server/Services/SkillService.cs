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
    public class SkillService : ISkillService
    {
        public SkillService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Skills;
            this.cache = cacheProvider.GetCache();
        }

        public SkillAddOrUpdateResponseDto AddOrUpdate(SkillAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new Skill());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new SkillAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<SkillDto> Get()
        {
            ICollection<SkillDto> response = new HashSet<SkillDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new SkillDto(entity)); }    
            return response;
        }


        public SkillDto GetById(int id)
        {
            return new SkillDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<Skill> repository;
        protected readonly ICache cache;
    }
}
