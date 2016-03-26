using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IVenueTypeService
    {
        VenueTypeAddOrUpdateResponseDto AddOrUpdate(VenueTypeAddOrUpdateRequestDto request);
        ICollection<VenueTypeDto> Get();
        VenueTypeDto GetById(int id);
        dynamic Remove(int id);
    }
}
