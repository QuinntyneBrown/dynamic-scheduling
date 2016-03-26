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
    public class ReportService : IReportService
    {
        public ReportService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Reports;
            this.cache = cacheProvider.GetCache();
        }

        public ReportAddOrUpdateResponseDto AddOrUpdate(ReportAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new Report());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new ReportAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<ReportDto> Get()
        {
            ICollection<ReportDto> response = new HashSet<ReportDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new ReportDto(entity)); }    
            return response;
        }


        public ReportDto GetById(int id)
        {
            return new ReportDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<Report> repository;
        protected readonly ICache cache;
    }
}
