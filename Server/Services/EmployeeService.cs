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
    public class EmployeeService : IEmployeeService
    {
        public EmployeeService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Employees;
            this.cache = cacheProvider.GetCache();
        }

        public EmployeeAddOrUpdateResponseDto AddOrUpdate(EmployeeAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new Employee());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new EmployeeAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<EmployeeDto> Get()
        {
            ICollection<EmployeeDto> response = new HashSet<EmployeeDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new EmployeeDto(entity)); }    
            return response;
        }


        public EmployeeDto GetById(int id)
        {
            return new EmployeeDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<Employee> repository;
        protected readonly ICache cache;
    }
}
