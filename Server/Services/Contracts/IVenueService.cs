using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IVenueService
    {
        VenueAddOrUpdateResponseDto AddOrUpdate(VenueAddOrUpdateRequestDto request);
        ICollection<VenueDto> Get();
        VenueDto GetById(int id);
        dynamic Remove(int id);
    }
}
