using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IProjectService
    {
        ProjectAddOrUpdateResponseDto AddOrUpdate(ProjectAddOrUpdateRequestDto request);
        ICollection<ProjectDto> Get();
        ProjectDto GetById(int id);
        dynamic Remove(int id);
    }
}
