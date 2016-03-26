using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface ILocationService
    {
        LocationAddOrUpdateResponseDto AddOrUpdate(LocationAddOrUpdateRequestDto request);
        ICollection<LocationDto> Get();
        LocationDto GetById(int id);
        dynamic Remove(int id);
    }
}
