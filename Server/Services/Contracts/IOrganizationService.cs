using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IOrganizationService
    {
        OrganizationAddOrUpdateResponseDto AddOrUpdate(OrganizationAddOrUpdateRequestDto request);
        ICollection<OrganizationDto> Get();
        OrganizationDto GetById(int id);
        dynamic Remove(int id);
    }
}
