using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IScheduleService
    {
        ScheduleAddOrUpdateResponseDto AddOrUpdate(ScheduleAddOrUpdateRequestDto request);
        ICollection<ScheduleDto> Get();
        ScheduleDto GetById(int id);
        dynamic Remove(int id);
    }
}
