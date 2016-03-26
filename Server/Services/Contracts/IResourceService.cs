using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IResourceService
    {
        ResourceAddOrUpdateResponseDto AddOrUpdate(ResourceAddOrUpdateRequestDto request);
        ICollection<ResourceDto> Get();
        ResourceDto GetById(int id);
        dynamic Remove(int id);
    }
}
