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
    public class VendorService : IVendorService
    {
        public VendorService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Vendors;
            this.cache = cacheProvider.GetCache();
        }

        public VendorAddOrUpdateResponseDto AddOrUpdate(VendorAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new Vendor());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new VendorAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<VendorDto> Get()
        {
            ICollection<VendorDto> response = new HashSet<VendorDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new VendorDto(entity)); }    
            return response;
        }


        public VendorDto GetById(int id)
        {
            return new VendorDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<Vendor> repository;
        protected readonly ICache cache;
    }
}
