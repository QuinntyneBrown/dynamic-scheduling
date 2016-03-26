using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IVendorService
    {
        VendorAddOrUpdateResponseDto AddOrUpdate(VendorAddOrUpdateRequestDto request);
        ICollection<VendorDto> Get();
        VendorDto GetById(int id);
        dynamic Remove(int id);
    }
}
