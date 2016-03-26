using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IEventService
    {
        EventAddOrUpdateResponseDto AddOrUpdate(EventAddOrUpdateRequestDto request);
        ICollection<EventDto> Get();
        EventDto GetById(int id);
        dynamic Remove(int id);
    }
}
