using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface ITaskService
    {
        TaskAddOrUpdateResponseDto AddOrUpdate(TaskAddOrUpdateRequestDto request);
        ICollection<TaskDto> Get();
        TaskDto GetById(int id);
        dynamic Remove(int id);
    }
}
